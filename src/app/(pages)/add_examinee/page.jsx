// src/app/(pages)/add_examinee/page.jsx

'use client';
import { Add_examinee } from '../../components/';
import { useState, useEffect } from 'react';
import { Fetch_to } from "../../utilities";
import { useRouter } from 'next/navigation';

export default function Add_examineePage() {
  const router = useRouter();
  const [email, setEmail] = useState();

   useEffect(() => {
          async function check() {
              const response = await Fetch_to("/services/jwt/verify");
              if (!response.success) return router.push("/");
              setEmail(response.data.message.data[0].email);
          }
          check();
      }, []);

      if (!email) return null;

  return <Add_examinee email={email} />;
}