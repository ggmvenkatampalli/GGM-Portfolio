import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  FileText,
  Send,
  Clock
} from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: '',
    consent: false
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert('Please provide consent to proceed.');
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        '',        // Service ID
        '',       // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        ''        // Public Key
      );

      alert('Message sent successfully!');

      setFormData({
        name: '',
        email: '',
        subject: 'Project Inquiry',
        message: '',
        consent: false
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gv2281@nyu.edu',
      href: 'mailto:gv2281@nyu.edu',
      color: 'text-[#58a6ff]'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (256) 654-4247',
      href: 'tel:+12566544247',
      color: 'text-[#3fb950]'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY',
      color: 'text-[#f78166]'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/gagana-geethika-maya',
      username: 'gagana-geethika-maya'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ggmvenkatampalli',
      username: 'ggmvenkatampalli'
    },
    {
      icon: FileText,
      label: 'Resume',
      href: 'https://drive.google.com/file/d/1M-4jmayon_2QabSmT9sHgUwt-FIoAdmY/view?usp=sharing',
      username: 'View Resume'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#58a6ff] to-[#3fb950] rounded-full mx-auto" />
          <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mt-4">
            Experience includes project coordination, cross-functional collaboration, operational documentation, workflow optimization, and data-driven analysis supporting project and product operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-1 space-y-8">

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-start space-x-4">
                    <div className={`p-3 bg-[#161b22] rounded-lg border border-[#30363d] ${info.color}`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-[#8b949e] mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="font-medium hover:text-[#58a6ff] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Connect</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-[#161b22] rounded-lg border border-[#30363d] hover:border-[#58a6ff]/50 transition-colors group"
                    >
                      <Icon size={20} className="text-[#8b949e] group-hover:text-[#58a6ff]" />
                      <div>
                        <p className="text-sm text-[#8b949e]">{social.label}</p>
                        <p className="text-sm font-medium">{social.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-[#161b22] rounded-xl p-6 border border-[#30363d]">
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-[#58a6ff]" />
                <div>
                  <p className="font-medium mb-1">Response Time</p>
                  <p className="text-sm text-[#8b949e]">
                    Typically replies within 3 business days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – FORM */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-[#161b22] rounded-xl p-8 border border-[#30363d] space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg"
                />
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg"
                />
              </div>

              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg"
              >
                <option>Project Inquiry</option>
                <option>Speaking Opportunity</option>
                <option>Workshop Request</option>
                <option>Other</option>
              </select>

              <textarea
                required
                rows={6}
                placeholder="Tell me about your project or inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg resize-none"
              />

              <label className="flex items-start space-x-3 text-sm text-[#8b949e]">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                />
                <span>I consent to storing my contact information for the purpose of responding.</span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-[#58a6ff] text-[#0d1117] rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
