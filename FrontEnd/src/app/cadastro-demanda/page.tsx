'use client';

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Sidebar from '@/components/sidebar';
import { Checkbox } from 'primereact/checkbox';
import { Menu } from 'primereact/menu';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { CircleUserRound } from 'lucide-react';
import { Plus } from 'lucide-react';


{/*Estilização*/ }
const DropdownContainer = styled.div`
  border: 3px solid #0B1E7C;
  border-radius: 5px;
  background-color: #C9D6F2;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-family: Arial, sans-serif;
  width: 60vw;
  margin: 0 auto;
  margin-top: 2vw;
  cursor: pointer;

  &:hover {
    background-color:#a1b3da;
  }
`;

const CheckboxContainer = styled.div`
  border: 3px solid #0B1E7C;
  border-radius: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  pointer-events: auto;
`;

const Name = styled.span`
  flex-grow: 1;
  color: #757575;
  font-size: 16px;
  pointer-events: auto;
  margin-left: 1vw;
`;

const Title = styled.span`
  flex-grow: 1;
  color: #000000;
  font-weight: bolder;
  font-size: 16px;
  pointer-events: auto;
  margin-left: 1vw;
`;

const Status = styled.span`
  color: #7f8c8d;
  font-size: 14px;
  margin-left: 10px;
  pointer-events: auto;
`;

const FloatingPlusButton = styled.div`
  position: fixed;
  bottom: 2vw;
  right: 2vw;
  background-color: #091588;
  border-radius: 50%;
  padding: 10px;
  z-index: 1000;
  cursor: pointer;

  &:hover {
    background-color:#1D154A;
  }
`;


const CustomCheckboxStyles = styled.div`
  .custom-checkbox .p-checkbox .p-checkbox-box {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 2px solid #2c3e50;
    background-color: #fff;
  }

  .custom-checkbox .p-checkbox .p-checkbox-box.p-highlight {
    background-color: #2c3e50;
  }

  
`;
const menuItems = [
    {
        label: 'Perfil',
        icon: 'pi pi-user',
        command: () => {
            console.log('Perfil clicado');
        },
    },
];

const Dropdown: React.FC = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const menu = useRef<any>(null);

    // Menu items for the dropdown
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    return (
        <div>
            <Sidebar session_token_role="estudante" />
            <CustomCheckboxStyles>
                <DropdownContainer onClick={toggleDropdown}>
                    <CheckboxContainer>
                        <Checkbox
                            onClick={(e) => e.stopPropagation()}
                            onChange={(e) => setChecked(e.checked ?? false)}
                            checked={checked}
                            className="custom-checkbox"
                        />
                    </CheckboxContainer>
                    <CircleUserRound size={24} color="#2c3e50" />
                    <Name>Rodrigo</Name>
                    <Title>Demanda...</Title>
                    <Status>Oi...</Status>
                    <Status>Out. 25</Status>
                </DropdownContainer>

                {showDropdown && (
                    <div style={{
                        margin: '10px auto',
                        padding: '20px',
                        border: '3px solid #0B1E7C',
                        borderRadius: '10px',
                        backgroundColor: '#fff',
                        width: '60vw',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        fontFamily: 'Arial, sans-serif'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <CircleUserRound size={48} color="#2c3e50" />
                                <div>
                                    <div style={{ fontWeight: 'bold', color: '#000000' }}>Rodrigo Souza</div>
                                    <div style={{ color: '#737373', fontSize: '1vw', textDecoration: 'underline' }}>admin@gmail.com</div>
                                </div>
                            </div>
                            <div style={{ fontSize: '1vw', color: '#555', marginRight: '15vw' }}>25 de Outubro, 2025 19:28</div>
                        </div>

                        <h2 style={{ marginTop: '2vw', fontWeight: 'bold', color: '#000000', textAlign: 'center', fontSize: '2vw' }}>
                            Why Choose a theme that looks good with WooComerce
                        </h2>

                        <p style={{ color: '#424242', marginTop: '1vw', textAlign: 'justify', marginLeft: '2vw', marginRight: '2vw' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                )}

                <Menu id="popup_menu" model={menuItems} popup ref={menu} />
            </CustomCheckboxStyles>
            <FloatingPlusButton>
                <Plus size={40} color="#fff" />
            </FloatingPlusButton>

        </div>
    );
};

export default Dropdown;