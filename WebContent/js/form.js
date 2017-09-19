$(function() {
	$(myform)
			.validate(
					{
						debug : true, // 表单的提交按钮失效
						submitHandler : function(form) { // 用来控制提交按钮
							form.submit(); // 提交表单
							// 此时如果需要ajax提交，将form.submit()换成ajax函数
						},
						highlight : function(element, errorClass) { // 显示高亮
							var id = element.id; // 取得组件的id
							if (element.id.indexOf(".")) { // 表示当前ID需要进行转义处理
								id = element.id.replace(".", "\\."); // 修改新的id
							}
							id = id + "Div"; // 现在的组件ID
							$("#" + id).attr("class", "form-group has-error");
						},
						unhighlight : function(element, errorClass) { // 取消高亮
							var id = element.id; // 取得组件的id
							if (element.id.indexOf(".")) { // 表示当前ID需要进行转义处理
								id = element.id.replace(".", "\\."); // 修改新的id
							}
							id = id + "Div"; // 现在的组件ID
							$("#" + id).attr("class", "form-group has-success");
						},
						errorPlacement : function(error, element) { // 错误消息提示
							var id = $(element).attr("id");
							if (id.indexOf(".") != -1) {
								id = id.replace(".", "\\.");
							}
							id = id + "Msg";
							$("#" + id).empty(); // 清除之前的所有内容
							$("#" + id)
									.append(
											"<span class='text-danger glyphicon glyphicon glyphicon-remove' ></span>&nbsp;");
							$("#" + id).append(error);
						},
						errorClass : "text-danger",
						success : function(error, element) { // 成功的消息提示
							var id = $(element).attr("id");
							if (id.indexOf(".") != -1) {
								id = id.replace(".", "\\.");
							}
							id = id + "Msg";
							$("#" + id).empty(); // 清除之前的所有内容
							$("#" + id)
									.append(
											"<span class='text-success glyphicon glyphicon-ok' ></span>");
						},
						messages : {
							"code" : {
								rangelength : "验证码的长度必须是4位！",
								remote : "验证码输入错误！"
							}
						},
						// 所有的具体的验证细节，以及与验证有关的控制都在这里写
						rules : { // 针对表单实现的验证控制处理
							"member.mid" : {
								required : true,
								rangelength : [ 5, 15 ]
							},
							"code" : {
								required : true,
								rangelength : [ 4, 4 ],
								remote : { // 代表了ajax请求
									url : "CodeServlet",
									type : "post",
									dataType : "text",
									data : {
										code : function() {
											return $("#code").val();
										}
									},
									dataFilter : function(data, type) {
										if (data.trim() == "true") {
											return true;
										} else {
											$(code).val(""); // 把错误的内容删除掉
											$(codeImg).attr(
													"src",
													"image.jsp?p="
															+ Math.random());
											return false;
										}
									}
								}
							},
							"member.email" : {
								required : true,
								email : true
							},
							"member.password" : {
								required : true,
							},
							"member.conf" : {
								required : true,
								equalTo : "#member\\.password"
							},
							"member.sex" : {
								required : true
							},
							"member.inst" : {
								required : true
							},
							"member.city" : {
								required : true
							},
							"member.age" : {
								required : true,
								digits : true
							},
							"member.birthday" : {
								required : true,
								dateISO : true
							},
							"member.photo" : {
								required : true,
								extension : "jpg,gif"
							},
							"member.note" : {
								required : true,
							}
						}
					});
})
