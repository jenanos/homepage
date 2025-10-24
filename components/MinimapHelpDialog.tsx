import { Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Canvas } from '@react-three/fiber';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { MinimapThumbnail } from './MinimapThumbnail';

interface MinimapHelpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  showMap: boolean;
  setShowMap: Dispatch<SetStateAction<boolean>>;
}

export function MinimapHelpDialog({ open, onOpenChange, showMap, setShowMap }: MinimapHelpDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Få oversikt med minimappet</DialogTitle>
          <DialogDescription>
            Minimappet lar deg hoppe mellom områdene på øya. Du kan slå det av når du vil utforske på egenhånd, og slå det på igjen
            når du trenger oversikten.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
            <Canvas camera={{ position: [0, 0, 2.5], fov: 35 }} dpr={[1, 2]}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[2, 3, 4]} intensity={0.8} />
              <Suspense fallback={null}>
                <group rotation={[0.15, 0.4, 0]} scale={2} position={[0, -0.3, 0]}>
                  <MinimapThumbnail />
                </group>
              </Suspense>
            </Canvas>
          </div>
          <div className="rounded-lg bg-white/5 p-4 text-sm leading-relaxed text-white/80">
            <p className="font-semibold text-white">Tips</p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li>Trykk på de ulike områdene for å flytte kameraet automatisk.</li>
              <li>Slå av minimappet når du vil styre kameraet fritt.</li>
              <li>Du kan alltid åpne denne hjelpen igjen fra knappen nederst på siden.</li>
            </ul>
          </div>
        </div>
        <DialogFooter>
          <button
            type="button"
            onClick={() => setShowMap((value) => !value)}
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            {showMap ? 'Skjul minimappet' : 'Vis minimappet'}
          </button>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Lukk
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
