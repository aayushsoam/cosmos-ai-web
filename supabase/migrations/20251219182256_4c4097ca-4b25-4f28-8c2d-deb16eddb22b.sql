-- Create extension_config table for managing download URLs and demo video
CREATE TABLE public.extension_config (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.extension_config ENABLE ROW LEVEL SECURITY;

-- Public read access (anyone can see configs)
CREATE POLICY "Anyone can view extension config" 
ON public.extension_config 
FOR SELECT 
USING (true);

-- Insert default configs
INSERT INTO public.extension_config (key, value, description) VALUES
  ('demo_video_url', '', 'Demo video URL (YouTube or direct video link)'),
  ('download_url', '', 'Direct download URL for the extension'),
  ('version', '1.0.0', 'Current extension version');

-- Create storage bucket for extension files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('extensions', 'extensions', true);

-- Storage policies for public read access
CREATE POLICY "Anyone can view extension files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'extensions');