export default function Location() {
  return (
    <section className="py-8 bg-gray-50">
      <div data-aos="fade-up" className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="w-8 h-8 text-cd871f mx-auto mb-2">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-semibold text-sm mb-1">Address</h4>
            <p className="text-xs text-gray-600">Main Office, City</p>
          </div>

          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="w-8 h-8 text-cd871f mx-auto mb-2">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h4 className="font-semibold text-sm mb-1">Phone</h4>
            <p className="text-xs text-gray-600">+92 XXX XXXX</p>
          </div>

          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="w-8 h-8 text-cd871f mx-auto mb-2">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h4 className="font-semibold text-sm mb-1">Email</h4>
            <p className="text-xs text-gray-600">info@foundation.org</p>
          </div>

          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="w-8 h-8 text-cd871f mx-auto mb-2">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-semibold text-sm mb-1">Hours</h4>
            <p className="text-xs text-gray-600">Mon-Fri 9AM-6PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}