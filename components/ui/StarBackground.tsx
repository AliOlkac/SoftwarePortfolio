"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-expect-error - maath modülü için tip tanımları yok
import * as random from "maath/random/dist/maath-random.esm";

interface StarBackgroundProps {
  [key: string]: unknown;
}

/**
 * 3D yıldız kümesi bileşeni
 * React Three Fiber ile oluşturulmuş 3D yıldız parçacıklarını render eder
 */
const StarBackground = (props: StarBackgroundProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  // 3D küre içinde rastgele dağıtılmış 5000 nokta oluştur
  const [sphere] = useState<Float32Array>(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Her frame'de yıldızları döndür - animasyon etkisi oluşturur
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta/10;
      ref.current.rotation.y -= delta/15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
            <PointMaterial
                transparent
                color="#fff"
                size={0.002}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    </group>
  );
};

/**
 * Yıldızlı arkaplan canvas bileşeni
 * Tüm sayfada yıldızlı arkaplanı görüntülemek için kullanılır
 */
const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[-1] pointer-events-none">
        <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
            <StarBackground />
        </Suspense>
        <Preload all />
        </Canvas>
    </div>
);

export default StarsCanvas; 