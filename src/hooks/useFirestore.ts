import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Experience, Project, Overview } from '@/types';

export function useCareerPath() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const q = query(collection(db, 'career-path'), orderBy('startedAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const experiencesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          startedAt: doc.data().startedAt.toDate(),
        })) as Experience[];
        setExperiences(experiencesData);
      } catch (err) {
        setError(new Error('Failed to fetch career path'));
      } finally {
        setLoading(false);
      }
    }

    fetchExperiences();
  }, []);

  return { experiences, loading, error };
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const q = query(collection(db, 'projects'), orderBy('orderIndex'));
        const querySnapshot = await getDocs(q);
        const projectsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Project[];
        setProjects(projectsData);
      } catch (err) {
        setError(new Error('Failed to fetch projects'));
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, loading, error };
}

export function useOverview() {
  const [overview, setOverview] = useState<Overview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchOverview() {
      try {
        const querySnapshot = await getDocs(collection(db, 'overview'));
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          setOverview({
            id: doc.id,
            ...doc.data(),
          } as Overview);
        }
      } catch (err) {
        setError(new Error('Failed to fetch overview'));
      } finally {
        setLoading(false);
      }
    }

    fetchOverview();
  }, []);

  return { overview, loading, error };
}
