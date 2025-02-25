import { notFound } from 'next/navigation';
    import { getRequestConfig } from 'next-intl/server';
    import { headers } from 'next/headers';
    
    // Can be imported from a shared config
    const locales = ['en', 'fr', 'es', 'de'];
    
    export default getRequestConfig(async () => {
        const locale = (await headers()).get('X-NEXT-INTL-LOCALE');
        
        // Validate that the incoming `locale` parameter is valid
        if (!locales.includes(locale)) notFound();
    
        return {
            locale,
            messages: (await import(`@/messages/${locale}.json`)).default,
        };
    });