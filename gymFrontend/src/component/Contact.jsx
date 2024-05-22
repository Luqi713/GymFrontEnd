import React from 'react';

const sharedClasses = {
  redText: 'text-red-600 dark:text-red-400',
  redTextBold: 'text-red-800 dark:text-red-200',
  inputField: 'w-full px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500',
};

const ContactForm = () => {
  return (
    <>
    <center><h2 id='contact' className="text-3xl text-red-500 font-bold mb-8">Find Us!</h2></center>
    <div className="bg-red-100 dark:bg-red-800 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h2 className={`text-2xl font-bold ${sharedClasses.redTextBold} mb-4`}>Contact Us</h2>
            <p className={`${sharedClasses.redText} mb-2`}>#183 Barket Market, Garden Town</p>
            <p className={`${sharedClasses.redText} mb-2`}>Lahore, Pakistan</p>
            <p className={`${sharedClasses.redText} mb-2`}>123-456-7890</p>
            <p className={`${sharedClasses.redText} mb-6`}>Email321@example.com</p>
          </div>
          <form className="bg-white dark:bg-red-700 shadow-md rounded-lg p-6">
            <h2 className={`text-xl font-bold ${sharedClasses.redTextBold} mb-4`}>Send us a message</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm text-red-700 dark:text-red-300">Name</label>
              <input type="text" id="name" name="name" className={sharedClasses.inputField} required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-red-700 dark:text-red-300">Email</label>
              <input type="email" id="email" name="email" className={sharedClasses.inputField} required />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm text-red-700 dark:text-red-300">Subject</label>
              <input type="text" id="subject" name="subject" className={sharedClasses.inputField} required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm text-red-700 dark:text-red-300">Message</label>
              <textarea id="message" name="message" className={sharedClasses.inputField} rows="4" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">Send</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
