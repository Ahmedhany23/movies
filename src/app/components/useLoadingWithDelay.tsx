"use client";
import { useEffect, useState, Suspense, ReactNode } from "react";
import Loading from "@/app/components/Loading";

const useLoadingWithDelay = (delay: Number) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return loading;
};

export const SuspenseWithDelay = ({
  children,
  delay,
}: {
  children: ReactNode;
  delay: Number;
}) => {
  const loading = useLoadingWithDelay(delay);

  return (
    <Suspense fallback={<Loading />}>
      {loading ? 
      <div className="h-screen flex items-center justify-center">
  <Loading /> 
      </div>
    
      
      : children}
    </Suspense>
  );
};
