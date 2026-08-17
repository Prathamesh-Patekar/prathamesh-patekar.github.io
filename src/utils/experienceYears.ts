import type { ExperienceItem } from '../types';

const MONTHS: Record<string, number> = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
};

function parseMonthYear(value: string): Date | null {
  const match = value.trim().match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (!match) return null;

  const month = MONTHS[match[1].toLowerCase()];
  const year = Number(match[2]);
  if (month === undefined || Number.isNaN(year)) return null;

  return new Date(year, month, 1);
}

function getPeriodStart(period: string): Date | null {
  const [start] = period.split(/\s+[—–-]\s+/);
  return start ? parseMonthYear(start) : null;
}

export function getYearsOfExperience(items: ExperienceItem[], now = new Date()): number {
  const starts = items
    .map((item) => getPeriodStart(item.period))
    .filter((date): date is Date => date instanceof Date);

  if (starts.length === 0) return 0;

  const careerStart = new Date(Math.min(...starts.map((date) => date.getTime())));
  let years = now.getFullYear() - careerStart.getFullYear();
  const hasNotReachedAnniversary =
    now.getMonth() < careerStart.getMonth() ||
    (now.getMonth() === careerStart.getMonth() && now.getDate() < careerStart.getDate());

  if (hasNotReachedAnniversary) years -= 1;

  return Math.max(0, years);
}

export function formatYearsOfExperience(items: ExperienceItem[]): string {
  return `${getYearsOfExperience(items)}+ Years`;
}
