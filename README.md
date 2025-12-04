# Upzenix Internship - Week 1 Assignment  
### React Form with Validation & Routing

This project is part of the **Upzenix Full Stack Development Internship (Week 1)**.  
The goal was to create a **React form** with proper validation, error handling, routing, and a minimal UI.

---

## Features

### Controlled Inputs using `useState`
All form fields are controlled using React’s state management.

### Form Validation
- First Name (required)  
- Last Name (required)  
- Username (required)  
- Email validation (`@` check)  
- Password (min 6 characters)  
- Country Code (required)  
- Phone (exactly 10 digits)  
- Country & City (required)  
- PAN (10 characters)  
- Aadhaar (12 digits)  

### Show/Hide Password
Simple toggle button to view or hide the password.

### Error Message Rendering
Invalid fields show:
- Red border  
- Small error text  

### Submit Button Disabled Until Valid
User cannot submit until the entire form is validated.

### React Router Navigation
After successful validation, user is redirected to `/details`, where all submitted data is displayed.

### Clean & Minimal UI
Lightweight CSS for a simple and professional look.

## 📂 Folder Structure

