export type SupportedLocale = 'es'
export type MessageSchema = Record<string, unknown>

let i18nPromise: Promise<import('vue-i18n').I18n<{ es: MessageSchema }, {}, {}, SupportedLocale, true>> | null = null

export async function makeI18n() {
    if (i18nPromise) return i18nPromise

    i18nPromise = (async () => {
        const [{ createI18n }, mod] = await Promise.all([
            import('vue-i18n'),      // will be placed in its own chunk
            import('../../../../lang/es.json'), // separate chunk (lazy)
        ])

        const messages = (mod as any).default as MessageSchema

        return createI18n<[MessageSchema], SupportedLocale>({
            legacy: false,
            globalInjection: true,
            locale: 'es',
            fallbackLocale: 'es',
            messages: { es: messages },
        })
    })()

    return i18nPromise
}
