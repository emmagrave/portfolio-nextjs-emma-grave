export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface NewsItem {
  title: string
  date: string
  description: string
  year: string
}

export interface Project {
  title: string
  status?: string
  description: string
  technologies: string[]
  link: string
  imagePlaceholder: string
}

export interface Phase {
  period: string
  title: string
  description: string
  tags: string[]
  highlight?: string
  status: 'done' | 'current' | 'next'
}

export interface AlternanceCard {
  title: string
  description: string
  icon: string
}
