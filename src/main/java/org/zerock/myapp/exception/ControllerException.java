package org.zerock.myapp.exception;

public class ControllerException extends Exception {

	private static final long seriaVersionUID = 1l;
	
	public ControllerException(String message) {
		super(message);
	} // Constructor
	
	public ControllerException(Exception originalException) {
		super(originalException);
	} // Constructor
} // end class
