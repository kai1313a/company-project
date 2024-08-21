import "./globals.css";
import "./css/reset.css";


export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <body className='sec_project_wrap'>

            {/* 메인 */}
            {children}

        </body>
    </html>
  );
}
