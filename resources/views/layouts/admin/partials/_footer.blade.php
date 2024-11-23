                <!-- Scroll to Top Button-->
                <a class="scroll-to-top rounded float-end" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>
                </div>
            </div>
                
            
        {{-- <script src="{{ asset('/assets/libs/jquery/dist/jquery.min.js') }}"></script> --}}
        {{-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> --}}
        <script src="{{ asset('/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js') }}"></script>
        <script src="{{ asset('/assets/js/sidebarmenu.js') }}"></script>
        <script src="{{ asset('/assets/js/app.min.js') }}"></script>
        <script src="{{ asset('/assets/libs/apexcharts/dist/apexcharts.min.js') }}"></script>
        <script src="{{ asset('/assets/libs/simplebar/dist/simplebar.js') }}"></script>
        {{-- Dashboard Module --}}
        <script src="{{ asset('/assets/js/dashboard.js') }}"></script>
        {{-- Reports Module --}}
        <script src="{{ asset('/assets/js/report.js') }}"></script>
            
        <!-- Popper -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
       
        <!-- Animate On Scroll -->
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        
        <!-- Animate On Scroll Script -->
        <script>
            AOS.init();
        </script>
        <script>
            $(document).ready(function() {
                // Scroll to top functionality
                $(".scroll-to-top").click(function() {
                    $("html, body").animate({ scrollTop: 0 }, "slow");
                    return false;
                });
            });
        </script>
        
    </body>

</html>