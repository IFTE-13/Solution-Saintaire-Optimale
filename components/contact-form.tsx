"use client"
import React from 'react';
import { useForm } from "react-hook-form";
import { useTranslations } from 'next-intl';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { ContactFormValues, StatusMessage } from '@/lib/types';

interface ContactFormProps {
  onSubmit: (data: ContactFormValues) => Promise<void>;
  isSubmitting: boolean;
  status: StatusMessage;
}

export const ContactForm = ({ onSubmit, isSubmitting, status }: ContactFormProps) => {
  const t = useTranslations('contact.form');

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
  });

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              rules={{
                required: t('name.required'),
                minLength: {
                  value: 2,
                  message: t('name.minLength')
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('name.label')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('name.placeholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              rules={{
                required: t('email.required'),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t('email.invalid')
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('email.label')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('email.placeholder')} type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              rules={{
                required: t('message.required'),
                minLength: {
                  value: 10,
                  message: t('message.minLength')
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('message.label')}</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={t('message.placeholder')}
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {status.message && (
              <Alert variant={status.type === 'success' ? 'default' : 'destructive'}>
                <AlertDescription>
                  {status.message}
                </AlertDescription>
              </Alert>
            )}

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('submit.sending') : t('submit.send')}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};