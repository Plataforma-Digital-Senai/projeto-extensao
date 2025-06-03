"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ConfirmModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  isOpen,
  message,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl/20 w-80 text-center space-y-4">
        <h2 className="text-xl font-semibold">Tem certeza?</h2>
        <p>{message}</p>
        <div className="flex justify-around mt-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
            onClick={onConfirm}
          >
            Confirmar
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded cursor-pointer"
            onClick={onCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
