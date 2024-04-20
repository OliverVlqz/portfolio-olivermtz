'use server'
import { getErrorMessage, validateString } from "@/lib/utils"
import { error } from "console"
import { Resend } from "resend"
import ContacFormEmail from "@/email/contact-form-email"
import React from "react"
const resend= new Resend(process.env.RESEND_API_KEY)



 export const sendEmail= async(formData:FormData)=>{
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message') 
   
    if(!validateString(senderEmail, 500)){
        return {
            error:'Invalid sender email'
        }
    }
    if(!validateString(message, 5000)){
        return {
            error:'Invalid message'
        }
    }
   try {
    await resend.emails.send({
        from:'Contact Form <onboarding@resend.dev>',
        to:'oliveratom772@gmail.com',
        subject:'Message from contact form',
        reply_to:senderEmail as string,
        react: React.createElement(ContacFormEmail, {message: message as string, senderEmail: senderEmail as string})
        // text:message as string
    })
   } catch (error: unknown) {
    return{
        error: getErrorMessage(error)
    }
    
   }
    
}
