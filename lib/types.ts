export interface ContactFormValues {
    name: string;
    email: string;
    message: string;
  }
  
  export interface StatusMessage {
    type: 'success' | 'error' | null;
    message: string;
  }