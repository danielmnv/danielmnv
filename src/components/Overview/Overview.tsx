import { FetchState } from '../FetchState/FetchState';
import { Section } from '../Section/Section';
import { SkeletonLoader } from '../SkeletonLoader/SkeletonLoader';
import './Overview.css';
import { useOverview } from '@/hooks/useFirestore';
import { motion } from 'motion/react';

export function Overview() {
  const { overview, loading, error } = useOverview();

  return (
    <Section id="overview" title="Overview">
      <FetchState
        data={overview}
        loading={loading}
        error={error}
        skeleton={<SkeletonLoader count={4} height="h-4" />}
      >
        {(overview) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="prose prose-invert text-body text-justify"
          >
            {overview?.content}
          </motion.div>
        )}
      </FetchState>
    </Section>
  );
}
