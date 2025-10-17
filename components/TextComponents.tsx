import { Billboard, Text } from '@react-three/drei';

const TEXT_PROPS = {
  fontSize: 0.18,
  lineHeight: 1.2,
} as const;

const TextComponents = () => (
  <group>
    <Billboard position={[-8, 1.5, 12]}>
      <Text color="white" maxWidth={2} anchorY="middle" {...TEXT_PROPS}>
        {`Jurist og teknolog.\nJobber som seniorrådgiver om dagen.\nSpiller gitar og koder om natten.`}
      </Text>
    </Billboard>

    <Billboard position={[3.5, 5, -1]}>
      <Text color="white" maxWidth={2} anchorY="middle" {...TEXT_PROPS}>
        Jurist med master i rettsvitenskap fra UiO. Jobber med EU-juss, særlig personvern. Ekspert på Schrems II og bruk av
        skytjenester.
      </Text>
    </Billboard>

    <Billboard position={[10, 2.65, 10]}>
      <Text color="yellow" maxWidth={2} anchorY="middle" {...TEXT_PROPS}>
        {`Teknolog med bachelor i programmering og systemarkitektur fra UiO.\n\nSpesialisert på nettverk- og kommunikasjonssikkerhet.`}
      </Text>
    </Billboard>
    <Billboard position={[10, 1.75, 11]}>
      <Text color="yellow" maxWidth={1} anchorY="middle" {...TEXT_PROPS}>
        {`Denne siden er laget med:\n- Next.js\n- React\n- Tailwind\n- Three.js\n- Blender`}
      </Text>
    </Billboard>

    <Billboard position={[-5, 4, -4.5]}>
      <Text color="white" maxWidth={1.2} anchorX="left" anchorY="middle" {...TEXT_PROPS}>
        {`Spiller gitar i bandet Gete.\nVi er der du strømmer musikk!\n\nDu kan også klikke på radioen i tårnet.`}
      </Text>
    </Billboard>
  </group>
);

export default TextComponents;
