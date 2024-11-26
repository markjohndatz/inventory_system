<script>  
    // YajraDataTables
    $(document).ready(function () {
        $('#items-table').DataTable({
            processing: true,
            serverSide: true,
            ajax: '{{ route('items.index') }}', // Ensure the correct route here
            columns: [
                {
                    data: 'actions',
                    name: 'actions', // This should match the 'addColumn' in your controller
                },
                {
                    data: 'id',
                    name: 'id',
                },
                {
                    data: 'name',
                    name: 'name',
                },
                {
                    data: 'description',
                    name: 'description',
                }
            ],
            dom: 'Bfrtip',
            buttons: [
                { extend: 'excel', className: 'btn btn-success', text: '<i class="fas fa-file-excel"></i>' },


            ]
        });
    });


    DeleteSwalAlert
    function confirmDeleteItems(id){
        event.preventDefault();
        let itemId = id;
        
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-danger m-2',
                cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
        })
        
        swalWithBootstrapButtons.fire({
            title: 'Are you sure you want to delete this?',
            text: "You won't be able to revert this!",
            icon: "question",
            imageHeight: 200,
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            reverseButtons: false
        }).then((result)=>{
            if(result.isConfirmed){
                const origUrl = "{{route('items.destroy', 'itemID')}}";
                const url = origUrl.replace('itemID',itemId);
                $.ajax({
                    url: url,
                    type: 'DELETE',
                    headers: {
                        'X-CSRF-TOKEN': '{{ csrf_token() }}',
                        'Content-Type': 'application/json'
                    },
                    success: function(response) {
                        Swal.fire({
                            title: 'Deleted!',
                            html: response.message,
                            icon: 'success',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Okay'
                            }).then((result) => {
                            if (result.isConfirmed) {
                                $('#items-table').DataTable().ajax.reload();
                            }
                        })

                    },
                    error: function(error) {
                        // Handle error response
                        console.error('DELETE request failed:', error);
                    }
                });
            } else {
                result.dismiss == Swal.DismissReason.cancel;
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe',
                    'error',
                );
            }
        })
    }

       

</script>

