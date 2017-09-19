<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

<script type="text/javascript" src="js/jquery.min.js"></script>

<script type="text/javascript">
	$(function() {
		$("#sendBtn").on("click", function(){
			$.ajax({					 // JQuery处理的原生操作函数
				url: "EchoServlet",      // Ajax执行的处理路径
				method: "post",          // HTTP请求模式  restful
				data: {                  // 传递参数
						msg: $("#pmsg").val(),            // 与servlet中的getParameter中的key值对应
						info: "www.zhiyou100.com"		  // 直接传递具体的内容
						},
						// dataType: "text", // 返回的数据类型：text、xml、json
						dataType: "json",
						success: function(data) {  // 处理成功之后的返回信息
							//alert("请求处理成功: " + data.msg + "  " + data.info);
							console.log("请求处理成功: " + data.msg + "  " + data.info);
							$("#showDiv").append("<p> msg = " + data.msg + ", info = " + data.info);	
						},
						error: function() {
							alert("对不起，出错啦！");
							console.log("对不起，出错啦！");
						}
				})
			})
		});

	$(function(){
		$(sendBtn).on("mouseover", function(){
			var pmsg = $("#emp\\.pmsg").val();
			$.get("EchoServlet", 
					{msg: pmsg, info: "www.zhiyou100.com"}, 
					function(data){
						$("#showDiv").append("<p> msg = " + data.msg + ", info = " + data.info + "</p>");
					}, "json");
		});
	})
</script>
</head>
<body>

	<div id="showDiv"></div>
	
	<div>
		<input type="text" name="emp.pmsg" id="emp.pmsg" />
		<input type="button" id="sendBtn" value="发送消息" />
	</div>

</body>
</html>