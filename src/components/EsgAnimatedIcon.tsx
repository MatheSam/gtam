import { Users } from 'lucide-react';

export function EsgAnimatedIcon({ kind }: { kind: 'environmental' | 'social' | 'governance' }) {
  if (kind === 'environmental') return <svg className="esg-animated-icon esg-tree-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path className="tree-trunk" d="M24 42V21M24 32l-9-9m9 4 9-9m-9 19-8-7m8 1 8-8"/>
    <path className="tree-ground" d="M10 42h28"/>
    <circle className="tree-crown crown-one" cx="15" cy="19" r="5"/><circle className="tree-crown crown-two" cx="34" cy="15" r="5"/><circle className="tree-crown crown-three" cx="24" cy="12" r="6"/>
  </svg>;
  if (kind === 'social') return <Users className="esg-animated-icon esg-social-icon" aria-hidden="true"/>;
  return <svg className="esg-animated-icon esg-governance-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path className="governance-shield" d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11z"/>
    <path className="governance-check" d="m17 23 5 5 10-11"/>
    <circle className="governance-spark" cx="36" cy="11" r="2"/>
  </svg>;
}

