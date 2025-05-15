import { ScrollText, ArchiveRestore, ClipboardList } from 'lucide-react';

export function NavItems() {
  return [
    {
      name: 'Projetos',
      icon: <ScrollText size={24} className="text-sidebar-text" />,
      href: '#',
      active: false,
      position: 'top',
    },
    {
      name: 'Cadastrar Demanda',
      icon: <ArchiveRestore size={24} className="text-sidebar-text" />,
      href: '#',
      active: false,
      position: 'top',
    },
    {
      name: 'Meus Projetos',
      icon: <ClipboardList size={24} className="text-sidebar-text" />,
      href: '#',
      active: false,
      position: 'top',
    },
  ];
}