import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p>123 Main Street</p>
            <p>Riverside, ST 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@riverside.gov</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/departments">Departments</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/documents">Documents</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Hours</h3>
            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Emergency</h3>
            <p>Police: 911</p>
            <p>Fire: 911</p>
            <p>After Hours: (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm">
          <p>© {new Date().getFullYear()} Town of Riverside. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
