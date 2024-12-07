import { Phone, Mail } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <span>Home</span>
        <span>/</span>
        <span>Contact</span>
      </div>

      <div className="grid grid-cols-3 gap-12">
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold">Call To Us</h3>
            </div>
            <p className="text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
            <p className="text-gray-600">Phone: +8801611222333</p>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold">Write To Us</h3>
            </div>
            <p className="text-gray-600 mb-2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-gray-600">Emails: customer@exclusive.com</p>
            <p className="text-gray-600">Emails: support@exclusive.com</p>
          </div>
        </div>

        <div className="col-span-2">
          <form className="grid grid-cols-3 gap-4">
            <Input placeholder="Your Name *" className="col-span-1" />
            <Input placeholder="Your Email *" className="col-span-1" />
            <Input placeholder="Your Phone *" className="col-span-1" />
            <textarea
              placeholder="Your Message"
              className="col-span-3 h-40 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <div className="col-span-3 flex justify-end">
              <Button variant="primary">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}