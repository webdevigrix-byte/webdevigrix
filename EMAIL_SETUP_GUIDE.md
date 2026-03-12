# Email Setup Guide for Igrix Contact Form

## Using EmailJS (Recommended - Easy Setup)

Follow these steps to receive contact form submissions directly to your email: **webdevigrix@gmail.com**

### Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Sign up with your email: **webdevigrix@gmail.com**
4. Verify your email

### Step 2: Add Email Service

1. After logging in, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Click "Connect Account"
5. Sign in with **webdevigrix@gmail.com**
6. Allow EmailJS to send emails on your behalf
7. Copy the **Service ID** (looks like: service_xxxxxxx)

### Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Template Name:** Igrix Contact Form

**Subject:** New Contact Form Submission from {{firstName}} {{lastName}}

**Content:**
```
You have received a new message from your website contact form:

Name: {{firstName}} {{lastName}}
Email: {{email}}
Phone: {{phone}}
Project Type: {{projectType}}

Message:
{{message}}

---
This email was sent from your Igrix website contact form.
```

4. Save the template
5. Copy the **Template ID** (looks like: template_xxxxxxx)

### Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (looks like: aBcDeFgHiJkLmNoPqR)
3. Copy it

### Step 5: Update Your Website

Open `contact.html` and replace these three values:

**Line ~275:** Replace `YOUR_PUBLIC_KEY` with your Public Key
```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
```

**Line ~300:** Replace `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID`
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

### Example:
```javascript
// Before:
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)

// After (with your actual IDs):
emailjs.init("aBcDeFgHiJkLmNoPqR");
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

### Step 6: Test Your Form

1. Save the file
2. Open your website
3. Go to the Contact page
4. Fill out and submit the form
5. Check your email: **webdevigrix@gmail.com**

---

## Alternative: Use Web3Forms (Even Simpler)

If EmailJS doesn't work, here's an even simpler option:

1. Go to https://web3forms.com/
2. Enter your email: **webdevigrix@gmail.com**
3. Get your Access Key
4. Replace the form action in contact.html:

```html
<form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
    <!-- rest of form fields -->
</form>
```

---

## Troubleshooting

**Not receiving emails?**
- Check your spam/junk folder
- Make sure you verified your email with EmailJS
- Check EmailJS dashboard for delivery status
- Ensure all three IDs are correctly replaced in contact.html

**Need Help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- Web3Forms Documentation: https://docs.web3forms.com/

---

**Your Email:** webdevigrix@gmail.com  
**Current Form:** contact.html
