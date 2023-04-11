package org.zerock.myapp.exception;

public class ServiceException extends Exception{
	private static final long seriaVersionUID = 1l;
	
	public ServiceException(String message) {
		super(message);
 	} // Constructor
	
	public ServiceException(Exception originalException) {
		super(originalException);
	} // Constructor
} // end class
