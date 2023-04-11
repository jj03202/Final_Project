package org.zerock.myapp.listener;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@NoArgsConstructor

@WebListener
public class HttpSessionListenerImpl implements HttpSessionListener {

    @Override
    public void sessionCreated(HttpSessionEvent se)  { 
        log.trace("sessionCreated {} invoked", se);
        
        // 현재 요청을 보내는 웹브라우저에 대해서 세션이 없으면(세션ID도 없고, 금고(Session scope)도 없는)
        // 새로운 세션을 만들어라(웹브라우저의 이름으로 새로운 세션ID도 만들고 이 세션ID로만 열수 있는 
        // 금고상자(Session scope)도 Servlet Container 의 Session Storage 영역에 만들어라!! 는 의미
        HttpSession sess = se.getSession();
        log.info("\t+ SessionID_Cr : {}", sess.getId());
    } // sessionCreated

    @Override
    public void sessionDestroyed(HttpSessionEvent se)  { 
    	log.trace("sessionDestroyed {} invoked", se);
    	
        HttpSession sess = se.getSession();
        log.info("\t+ SessionID_DE : {}", sess.getId());
    } // sessionDestroyed
	
}
