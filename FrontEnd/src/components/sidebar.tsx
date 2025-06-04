'use client';

import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/components/lib/utils';
import { ChevronDown, LogOut, CircleUser, Menu, Briefcase, FileText, Folder } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';


// Defina a função NavItems para retornar itens com base na função do usuário
export const NavItems = (role: string) => {
  const commonItems = [
    {
      name: 'Projetos',
      href: '/projects',
      icon: <Folder size={20} className="text-white" />,
      active: false,
    },
  ];

  const studentItems = [
    ...commonItems,
    {
      name: 'Cadastrar Demanda',
      href: '/demands/new',
      icon: <FileText size={20} className="text-white" />,
      active: false,
    },
    {
      name: 'Meus Projetos',
      href: '/my-projects',
      icon: <Briefcase size={20} className="text-white" />,
      active: false,
    },
  ];

  const professorItems = [
    ...commonItems,
    {
      name: 'Demandas',
      href: '/demands',
      icon: <FileText size={20} className="text-white" />,
      active: false,
    },
  ];

  return role === 'professor' ? professorItems : studentItems;
};

export default function Sidebar({ session_token_role }: { session_token_role: string }) {
  const navItems = NavItems(session_token_role); 
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('sidebarExpanded');
      if (saved !== null) {
        setIsSidebarExpanded(JSON.parse(saved));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('sidebarExpanded', JSON.stringify(isSidebarExpanded));
    }
  }, [isSidebarExpanded]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };




  return (
    <div
      className={cn(
        'fixed inset-y-0 left-0 z-40 bg-[#1D154A] rounded-r-3xl transition-all duration-300 ease-in-out',
        'w-16 md:w-[256px]',
        'md:w-[64px]',
        isSidebarExpanded ? 'md:w-[256px]' : 'md:w-[64px]',
        'h-screen flex flex-col'
      )}
    >
      <aside className="flex h-full flex-col w-full break-words px-2 md:px-4 overflow-x-hidden">
        <div className={cn(
          'mt-4 flex items-center px-2',
          isSidebarExpanded ? 'justify-between' : 'justify-center'
        )}>
          <span className="text-[#1E6ECD] font-extrabold text-lg hidden md:block md:visible tracking-wide">
            {isSidebarExpanded && 'UniSenai'}
          </span>
          <button
            type="button"
            className="flex h-6 w-6 items-center justify-center rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hidden md:block"
            onClick={toggleSidebar}
          >
            <Menu size={24} className="text-white" />
          </button>
        </div>

        {/* Perfil do Usuário */}
        <div className={cn(
          'mt-10 bg-[#2B2A77] rounded-md p-2 flex items-center',
          isSidebarExpanded ? 'justify-between' : 'justify-center'
        )}>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={cn(
                  'flex items-center',
                  isSidebarExpanded && 'space-x-2'
                )}>
                  <CircleUser size={32} className="text-white" />
                  {isSidebarExpanded && (
                    <div className="flex flex-col hidden md:block md:visible">
                      <span className="text-white font-medium">André</span>
                      <br />
                      <span className="text-gray-400 text-sm">
                        {session_token_role === 'professor' ? 'Professor' : 'Estudante'}
                      </span>
                    </div>
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" className="px-3 py-1.5 text-xs bg-gray-800 text-white">
                <span>André - {session_token_role === 'professor' ? 'Professor' : 'Estudante'}</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {isSidebarExpanded && (
            <ChevronDown size={16} className="text-white hidden md:block md:visible" />
          )}
        </div>

        {/* Itens de Navegação */}
        <div className="mt-6 flex flex-col space-y-2">
          {navItems.map((item, idx) => (
            <Fragment key={idx}>
              <SideNavItem
                label={item.name}
                icon={item.icon}
                path={item.href}
                active={item.active}
                isSidebarExpanded={isSidebarExpanded}
              />
            </Fragment>
          ))}
        </div>

        {/* Logout */}
        <div className="sticky bottom-0 mt-auto mb-4">
          <SideNavItem
            label="Sair"
            icon={<LogOut size={20} className="text-white" />}
            path="/logout"
            active={false}
            isSidebarExpanded={isSidebarExpanded}
          />
        </div>
      </aside>
    </div>
  );
}

// Componente SideNavItem permanece inalterado
export const SideNavItem: React.FC<{
  label: string;
  icon: any;
  path: string;
  active: boolean;
  isSidebarExpanded: boolean;
}> = ({ label, icon, path, active, isSidebarExpanded }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={path}
            className={cn(
              'relative flex items-center whitespace-nowrap rounded-md',
              active
                ? 'bg-[#2A3B5A] text-white'
                : 'text-gray-300 hover:bg-[#2B2A77] hover:text-white'
            )}
          >
            <div className={cn(
              'font-medium text-sm py-2 px-1 flex rounded-md duration-100 w-full',
              !isSidebarExpanded ? 'flex-col items-center justify-center' : 'flex-row items-center space-x-2'
            )}>
              {icon}
              <span className={isSidebarExpanded ? 'md:block hidden' : 'hidden'}>
                {label}
              </span>
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" className="px-3 py-1.5 text-xs bg-gray-800 text-white">
          <span>{label}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};