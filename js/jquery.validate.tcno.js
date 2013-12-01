/*
 * jQuery T.C Kimlik No validate extension for the jQuery Validation plugin. 
 *
 * Author: Ismail Ata Kurt 
 *
 * Version 1.0.0 (12/23/2009)
 * Tested with jquery 1.3.2, but will probably work with earlier versions.
 *
 * Visit http://blog.livaxmedia.com/2009/12/23/jquery-ile-tc-kimlik-no-dogrulama/ for usage information
 *
 * Licensed under GPL license:
 *   http://www.gnu.org/licenses/gpl.html
*/
jQuery.validator.addMethod("tcno",function(a){var c=0,d=0,e=0,b=0,f=0;if(a.charAt(0)==0||a.length!=11)return false;b=parseInt(a.charAt(9),10);f=parseInt(a.charAt(10),10);for(i=0;i<9;i++){cd=parseInt(a.charAt(i),10);i%2==0?(c+=cd):(d+=cd);e+=cd}return(7*c-d)%10==b&&(e+b)%10==f?true:false},"L\u00fctfen ge\u00e7erli bir T.C Kimlik No girin.");