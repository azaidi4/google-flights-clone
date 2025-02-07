import { Link } from 'wouter';
import { ModeToggle } from '../mode-toggle';
import { Plane } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-sky-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <Link className="flex shrink-0 items-center text-sky-300" href="/">
              <div className="font-semibold text-xl">SkyFly</div>
              <Plane className="ml-1" />
            </Link>
            <div className="ml-5 text-white">
              Cheap <span className="text-amber-400">Flights</span>, Easy
            </div>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
