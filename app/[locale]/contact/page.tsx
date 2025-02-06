"use client"
import React from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';
import LocationMap from './location';
import ContactInfo from '@/components/contact-info';
import { ContactForm } from '@/components/contact-form';
import { ContactFormValues, StatusMessage } from '@/lib/types';

const ContactPage = () => {
  const t = useTranslations('contact.form.status');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<StatusMessage>({ 
    type: null, 
    message: '' 
  });

  const handleSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const serviceID = 'service_q400ebe';
      const templateID = 'template_jxg92us';
      const publicKey = 'LgSBp3bNTO_x658zX';

      await emailjs.send(serviceID, templateID, {
        name: data.name,
        email: data.email,
        message: data.message,
      }, publicKey);

      setStatus({
        type: 'success',
        message: t('success')
      });
    } catch (error) {
      console.error('EmailJS Send Error:', error);
      setStatus({
        type: 'error',
        message: t('error')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:gap-x-12">
          <div className="lg:w-1/2">
            <ContactInfo />
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <ContactForm 
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              status={status}
            />
          </div>
        </div>
      </section>
      <LocationMap />
    </div>
  );
};

export default ContactPage;