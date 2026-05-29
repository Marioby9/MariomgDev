import BLOG_CATEGORIES from "./BlogCategories";

const BLOG_POSTS = [
  {
    slug: "arquitectura-gratuita-para-mvps",
    title: "Arquitectura 100% gratuita para tus proyectos",
    description:
      "Una arquitectura real para MVPs y side projects sin coste: Render para API, Vercel para frontend y Supabase para PostgreSQL, con despliegue automático desde Git y monitorización para reducir cold starts.",
    highlights: [
      "Stack gratuito para validar ideas en entornos de producción.",
      "Despliegue automático con GitHub en cada push.",
      "Health checks con UptimeRobot para evitar inactividad.",
      "Recomendación crítica de regiones: Oregon en Render y Supabase.",
    ],
    category: BLOG_CATEGORIES.CLOUD,
    publishedAt: "29 Mayo 2026",
    readTime: "3 min de lectura",
  },
  {
    slug: "better-commits",
    title: "Cómo escribir mejores commits",
    description:
      "Un commit profesional explica qué se cambió y por qué. En este artículo comparto una estructura simple que mejora revisiones, reduce errores y acelera despliegues.",
    highlights: [
      "Usar mensajes claros y accionables con verbo en imperativo.",
      "Separar cambios por objetivo para facilitar code review y rollback.",
      "Añadir contexto de negocio cuando el cambio no es obvio.",
      "Evitar commits gigantes con mezcla de refactor, fixes y features.",
    ],
    category: BLOG_CATEGORIES.GIT,
    publishedAt: "29 Mayo 2026",
    readTime: "6 min de lectura",
  },
];

export default BLOG_POSTS;
