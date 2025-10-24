import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { MinimapInteractive } from './MinimapInteractive';
import type { MinimapStateSetter } from '../types/minimap';

interface MinimapHelpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  setMinimapState: MinimapStateSetter;
}

export function MinimapHelpDialog({
  open,
  onOpenChange,
  setMinimapState,
}: MinimapHelpDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl overflow-hidden border-white/20 bg-[radial-gradient(circle_at_top,_rgba(255,147,88,0.32),_rgba(9,6,17,0.96))] p-0">
        <div className="relative">
          <div className="relative h-[min(55vh,460px)] w-full">
            <Canvas
              shadows
              style={{ width: '100%', height: '100%' }}
              camera={{ position: [0.22, 1.08, 1.92], fov: 36 }}
              dpr={[1, 2]}
            >
              <color attach="background" args={['#130805']} />
              <ambientLight intensity={0.7} />
              <hemisphereLight intensity={0.35} groundColor="#1f0b07" color="#ffefde" />
              <spotLight
                position={[0.32, 2.18, 1.42]}
                angle={0.9}
                penumbra={0.4}
                intensity={0.75}
                color="#ffd4a1"
                distance={7}
                castShadow
              />
              <pointLight position={[-0.82, 1.58, 1.58]} intensity={1.65} color="#ffb973" distance={6} />
              <pointLight position={[0.96, 1.72, 1.32]} intensity={1.35} color="#ffcfa1" distance={6} />
              <pointLight position={[0.18, 0.74, -0.82]} intensity={0.8} color="#ffe6c7" distance={6} />
              <Suspense fallback={null}>
                <group rotation={[-0.58, 0.58, 0.12]} position={[0.06, -0.32, 0.08]} scale={0.92}>
                  <MinimapInteractive
                    setMinimapState={setMinimapState}
                    onRegionSelect={() => onOpenChange(false)}
                  />
                </group>
              </Suspense>
            </Canvas>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
        </div>
        <div className="space-y-5 p-6">
          <DialogHeader className="gap-3">
            <DialogTitle>Hopp mellom øyene</DialogTitle>
            <DialogDescription>
              Trykk på et område i minimappet for å reise dit. Når dialogen lukkes kan du styre kameraet fritt.
            </DialogDescription>
          </DialogHeader>
          <div className="rounded-lg border border-white/15 bg-black/30 p-4 text-sm leading-relaxed text-white/80">
            <p>Tips: Velg «Styr kameraet selv» for fri utforsking, eller klikk på øynene for å hoppe direkte til dem.</p>
          </div>
          <DialogFooter className="justify-end pt-1">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Lukk
            </button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
