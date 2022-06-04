$(document).ready(function(){
     $(":radio").click(function(){
          // attr() đặt hoặc trả về thuộc tính và giá trị của phần tử đã chọn
          var getValue = $(this).attr("value");
          var checkedValue = $("." + getValue);
          // not() Trả về các phẩn từ không phù hợp với tiêu chí nhất định
          $(".box").not(checkedValue).hide();
          checkedValue.show();
     });
});


$(document).ready(function(){
     $(":radio").click(function(){
          // data() lấy dữ liệu hoặc gắn dữ liệu vào phần tử đã chọn
          var tab = $(this).data('tab');
          $(".box").removeClass("active");
          $("#" + tab).addClass("active");
     });
});