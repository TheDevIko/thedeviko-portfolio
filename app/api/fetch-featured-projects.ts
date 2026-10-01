import { createClient } from "@/lib/supabase/client";

export default async function FetchFeaturedProjects() {
  const supabase = createClient();
  
  const { data: projects, error } = await supabase
    .from('featured_projects')
    .select(`position, projects!inner (title, subtitle, year, description, img_src, tech_stack, url)`)
    .order('position', { ascending: true })
  
  if (error || !projects ) {
    console.log(error);
    return [];
  }

  return projects ?? [];
}