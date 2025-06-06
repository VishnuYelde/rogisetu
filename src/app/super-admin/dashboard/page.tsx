"use client"

import { RootState } from '@/store/store';
import React from 'react'
import { useSelector } from 'react-redux';
import AnalyticsSummaryCard from '@/components/analytics/summary-card';
import Link from 'next/link';
import { HospitalIcon, Settings2Icon, ShieldCheckIcon } from 'lucide-react';

const SuperAdminDashboard = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <main className='py-6 px-2'>
      <div className="text-xl md:text-3xl">
        <h1 className='mb-1 md:mb-2 font-medium'>Welcome, 
          <span className="font-bold"> {user?.name}</span> 👋
        </h1>
        <h2 className='text-sm md:text-lg'>Super Admin Dashboard</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <AnalyticsSummaryCard linkTo="/super-admin/analytics" />
        {/* Other dashboard cards can go here */}
        <Link href="manage-hospitals" className="bg-muted p-4 rounded-xl border hover:border-primary">
            <HospitalIcon className="text-primary w-8 h-8" />
            <h3 className="text-lg md:text-xl font-semibold mt-2">Manage Hospitals</h3>
            <p className='text-sm md:text-base'>Manage all hospitals in Mumbai</p>
        </Link>
        <Link href="manage-admins" className="bg-muted p-4 rounded-xl border hover:border-primary">
            <ShieldCheckIcon className="text-primary w-8 h-8" />
            <h3 className="text-lg md:text-xl font-semibold mt-2">Manage Hospital Admins</h3>
            <p className='text-sm md:text-base'>Manage hospital admins across all the hospitals</p>
        </Link>
        <Link href="department-types" className="bg-muted p-4 rounded-xl border hover:border-primary">
            <Settings2Icon className="text-primary w-8 h-8" />
            <h3 className="text-lg md:text-xl font-semibold mt-2">Manage Department Types</h3>
            <p className='text-sm md:text-base'>Manage department types across all the hospitals</p>
        </Link>
      </div>
    </main>
  )
}

export default SuperAdminDashboard