package com.zhiyou.ajax.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@WebServlet("/EchoServlet")
public class EchoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public EchoServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		
		String msg  = request.getParameter("msg");
		String info = request.getParameter("info");
		
//		JSONObject obj = new JSONObject();
//		obj.put("msg", msg);
//		obj.put("info", info);
		
//		response.getWriter().println("【ECHO】msg=" + msg + "、info=" + info);
		System.out.println("{\"msg\":\"" + msg +"\",\"info\":\"" + info + "\"}");
		System.out.println("{'msg':'" + msg +"','info':'" + info + "'}");
//		response.getWriter().println("{\'msg\':\'" + msg +"\',\'info\':\'" + info + "\'}");
		response.getWriter().println("{\"msg\":\"" + msg +"\",\"info\":\"" + info + "\"}");
		
//		response.getWriter().write("{'msg':" + msg +",'info':" + info + "}");
//		response.getWriter().flush();
//		response.getWriter().println("<msg>"+msg+"</msg><info>"+info+"</info>");
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
