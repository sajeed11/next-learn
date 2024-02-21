import Link from 'next/link';
import Image from 'next/image';
import logo from '../components/download.png';

export default function Navbar() {
    return (
        <nav>
            <Image
                src={logo}
                alt="SJ11 Logo"
                width={70}
                quality={100}
                placeholder='blur'
            />
            <h1>SJ11 Helpdesk</h1>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    );
}
