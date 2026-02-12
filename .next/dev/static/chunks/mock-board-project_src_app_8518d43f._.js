(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mock-board-project/src/app/components/log_in/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "divider": "styles-module__z0SdHq__divider",
  "fadeIn": "styles-module__z0SdHq__fadeIn",
  "form": "styles-module__z0SdHq__form",
  "googleLogin": "styles-module__z0SdHq__googleLogin",
  "inputGroup": "styles-module__z0SdHq__inputGroup",
  "loginBox": "styles-module__z0SdHq__loginBox",
  "loginContainer": "styles-module__z0SdHq__loginContainer",
  "logo": "styles-module__z0SdHq__logo",
  "pulse": "styles-module__z0SdHq__pulse",
  "submitButton": "styles-module__z0SdHq__submitButton",
  "switchLink": "styles-module__z0SdHq__switchLink",
  "switchText": "styles-module__z0SdHq__switchText",
  "title": "styles-module__z0SdHq__title",
});
}),
"[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fetch_to
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function Fetch_to(dir, payload = {}, headers = {
    "x-api-key": __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_KEY || ""
}, retries = 3, delay = 1000 // wait time between attempts in ms
) {
    if (!dir || dir === "") {
        if ("TURBOPACK compile-time truthy", 1) alert("Invalid API Directory not found");
        return {
            success: false,
            message: "Invalid API Directory"
        };
    }
    for(let attempt = 1; attempt <= retries; attempt++){
        try {
            const response = await fetch(dir, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json().catch(()=>null); // safe parse
            if (response.ok) {
                console.log("Status for fetch: ", data);
                return {
                    success: true,
                    data
                }; // success
            } else {
                console.log(data?.error);
                return {
                    success: false,
                    message: data?.error || `Request failed: ${response.status}`
                };
            }
        } catch (err) {
            let message = "Unknown fetch error";
            if (err instanceof Error) message = err.message;
            console.error(`Attempt ${attempt} fetch error:`, message);
        }
        if (attempt < retries) await new Promise((res)=>setTimeout(res, delay));
    }
    return {
        success: false,
        message: `All ${retries} attempts failed for ${dir}`
    };
}
_c = Fetch_to;
var _c;
__turbopack_context__.k.register(_c, "Fetch_to");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/utilities/salt/encrypt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>hashPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js [app-client] (ecmascript)");
;
async function hashPassword(password) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/utilities/salt/verify.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js [app-client] (ecmascript)");
;
async function verifyPassword(plainPassword, hashedPassword) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].compare(plainPassword, hashedPassword);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/utilities/SweetAlert2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SweetAlert2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/sweetalert2@11.26.4/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
function SweetAlert2(title, text, icon, showConfirmButton = true, ok, showCancelButton = false, cancel, showLoading = false) {
    const isProcess = icon === 'process';
    // Detect dark mode
    // const isDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
        title,
        text,
        icon: isProcess ? undefined : icon,
        showConfirmButton: showConfirmButton && !showLoading,
        showCancelButton,
        confirmButtonText: ok,
        cancelButtonText: cancel,
        allowOutsideClick: false,
        background: '#1A54B8',
        color: '#fff',
        didOpen: ()=>{
            if (showLoading || isProcess) {
                __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].showLoading();
            }
        }
    });
}
_c = SweetAlert2;
var _c;
__turbopack_context__.k.register(_c, "SweetAlert2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/utilities/Fetch_toFile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fetch_toFile
]);
async function Fetch_toFile(dir, file, fields = {}, headers = {}, retries = 3, delay = 1000) {
    if (!dir || dir === "") {
        if ("TURBOPACK compile-time truthy", 1) alert("Invalid API Directory not found");
        return {
            success: false,
            message: "Invalid API Directory"
        };
    }
    if (!file) {
        return {
            success: false,
            message: "No file provided"
        };
    }
    // Build multipart form
    const formData = new FormData();
    formData.append("file", file);
    for(const key in fields){
        formData.append(key, String(fields[key]));
    }
    for(let attempt = 1; attempt <= retries; attempt++){
        try {
            const response = await fetch(dir, {
                method: "POST",
                headers: {
                    ...headers
                },
                body: formData
            });
            const data = await response.json().catch(()=>null);
            if (response.ok) {
                console.log("Status for file upload:", data);
                return {
                    success: true,
                    data
                };
            } else {
                console.log(data?.error);
                return {
                    success: false,
                    message: data?.error || `Request failed: ${response.status}`
                };
            }
        } catch (err) {
            let message = "Unknown fetch error";
            if (err instanceof Error) message = err.message;
            console.error(`Attempt ${attempt} fetch error:`, message);
        }
        if (attempt < retries) await new Promise((res)=>setTimeout(res, delay));
    }
    return {
        success: false,
        message: `All ${retries} attempts failed for ${dir}`
    };
}
_c = Fetch_toFile;
var _c;
__turbopack_context__.k.register(_c, "Fetch_toFile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/utilities/Fetch_download.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fetch_to
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function Fetch_to(dir, payload = {}, headers = {
    "x-api-key": __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_KEY || ""
}, retries = 3, delay = 1000, expectBlob = false // <-- new flag
) {
    if (!dir || dir === "") {
        if ("TURBOPACK compile-time truthy", 1) alert("Invalid API Directory not found");
        return {
            success: false,
            message: "Invalid API Directory"
        };
    }
    for(let attempt = 1; attempt <= retries; attempt++){
        try {
            const response = await fetch(dir, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                const errText = await response.text();
                return {
                    success: false,
                    message: errText || `Request failed: ${response.status}`
                };
            }
            const data = expectBlob ? await response.blob() : await response.json().catch(()=>null);
            return {
                success: true,
                data
            };
        } catch (err) {
            let message = "Unknown fetch error";
            if (err instanceof Error) message = err.message;
            console.error(`Attempt ${attempt} fetch error:`, message);
        }
        if (attempt < retries) await new Promise((res)=>setTimeout(res, delay));
    }
    return {
        success: false,
        message: `All ${retries} attempts failed for ${dir}`
    };
}
_c = Fetch_to;
var _c;
__turbopack_context__.k.register(_c, "Fetch_to");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$salt$2f$encrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/salt/encrypt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$salt$2f$verify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/salt/verify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/SweetAlert2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_toFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_toFile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_download.js [app-client] (ecmascript)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fetch_to",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript)");
}),
"[project]/mock-board-project/src/app/config/api_links/links.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"auth":{"signup":"/services/supabase/auth/signup","signin":"/services/supabase/auth/signin","check_email":"/services/supabase/auth/check_email"},"storage":{"uploadfile":"/services/supabase/storage/uploadfile","retrieve":"/services/supabase/storage/retrieve","delete":"/services/supabase/storage/delete","download":"/services/supabase/storage/download"},"admin":{"retrieve_user_assign_by":"/services/supabase/admin/retrieve_user_assign_by","retrieve_all_user":"/services/supabase/admin/retrieve_all_user_student","assigned":"/services/supabase/admin/assigned","unassigned":"/services/supabase/admin/unassigned","exam_result":"/services/supabase/admin/exam_result"},"user_data":{"questionare":"/services/api/response_to_python","retrieve_mock_exam":"/services/supabase/user/retrieve_mock_exam","retrieve_mock_exam_reviewer":"/services/supabase/user/retrieve_mock_exam_reviewer","exam_result":"/services/supabase/user/exam_result","update_score":"/services/supabase/user/update_score"},"python_response":"http://127.0.0.1:10000/"});}),
"[project]/mock-board-project/src/app/components/log_in/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LogIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$log_in$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/log_in/css/styles.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f40$react$2d$oauth$2b$google$40$0$2e$12$2e$2_$5f$79ce342f4b6dcbf77f1d5568c05f5cb9$2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/@react-oauth+google@0.12.2__79ce342f4b6dcbf77f1d5568c05f5cb9/node_modules/@react-oauth/google/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function LogIn() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        email: '',
        password: ''
    });
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LogIn.useEffect": ()=>{
            setIsClient(true);
        }
    }["LogIn.useEffect"], []);
    if (!isClient) {
        // Prevent SSR/client mismatch
        return null;
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].auth.signin, formData);
        if (response && response.success) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])('/services/jwt/auth', {
                email: formData.email
            });
            console.log(response.data);
            if (response.data.message[0].role === "admin") {
                router.push('/admin');
            } else {
                router.push('/dashboard');
            }
        } else {
            alert(response?.data?.message || 'Login failed. Please try again.');
        }
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$log_in$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$log_in$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginBox,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$log_in$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/logo.png",
                        alt: "Logo"
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$log_in$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: "Welcome Back"
                }, void 0, false, {
                    fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$log_in$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$log_in$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    id: "email",
                                    name: "email",
                                    value: formData.email,
                                    onChange: handleChange,
                                    required: true,
                                    placeholder: "Enter your email"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$log_in$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "password",
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    id: "password",
                                    name: "password",
                                    value: formData.password,
                                    onChange: handleChange,
                                    required: true,
                                    placeholder: "Enter your password"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$log_in$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                            children: "Log In"
                        }, void 0, false, {
                            fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$log_in$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switchText,
                    children: [
                        "Don't have an account?",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$log_in$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switchLink,
                            onClick: ()=>router.push('/signup'),
                            children: "Sign Up"
                        }, void 0, false, {
                            fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mock-board-project/src/app/components/log_in/index.jsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(LogIn, "1Uu+GmLowg0fl/g3NskFRQPmTAA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LogIn;
var _c;
__turbopack_context__.k.register(_c, "LogIn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/sign_up/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "divider": "styles-module__rZBG3G__divider",
  "fadeInUp": "styles-module__rZBG3G__fadeInUp",
  "form": "styles-module__rZBG3G__form",
  "googleSignup": "styles-module__rZBG3G__googleSignup",
  "inputGroup": "styles-module__rZBG3G__inputGroup",
  "inputGroup1": "styles-module__rZBG3G__inputGroup1",
  "logo": "styles-module__rZBG3G__logo",
  "logoSection": "styles-module__rZBG3G__logoSection",
  "signupBox": "styles-module__rZBG3G__signupBox",
  "signupContainer": "styles-module__rZBG3G__signupContainer",
  "submitButton": "styles-module__rZBG3G__submitButton",
  "switchLink": "styles-module__rZBG3G__switchLink",
  "switchText": "styles-module__rZBG3G__switchText",
  "title": "styles-module__rZBG3G__title",
});
}),
"[project]/mock-board-project/src/app/components/sign_up/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignupPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/sign_up/css/styles.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f40$react$2d$oauth$2b$google$40$0$2e$12$2e$2_$5f$79ce342f4b6dcbf77f1d5568c05f5cb9$2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/@react-oauth+google@0.12.2__79ce342f4b6dcbf77f1d5568c05f5cb9/node_modules/@react-oauth/google/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function SignupPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "student"
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].auth.check_email, {
            email: formData.email
        });
        if (data.success) {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].auth.signup, {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                c_password: formData.confirmPassword,
                role: formData.role
            });
            if (data.success) {
                router.push("/login");
            } else {
                alert(data.message);
            }
        } else {
            alert(data.message);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signupContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signupBox,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoSection,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/lccb_logo.png",
                        alt: "LCCB Logo",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: "Create Account"
                }, void 0, false, {
                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "name",
                                    children: "Full Name"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    id: "name",
                                    name: "name",
                                    placeholder: "Enter your name",
                                    value: formData.name,
                                    onChange: handleChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    id: "email",
                                    name: "email",
                                    placeholder: "Enter your email",
                                    value: formData.email,
                                    onChange: handleChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "password",
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    id: "password",
                                    name: "password",
                                    placeholder: "Enter your password",
                                    value: formData.password,
                                    onChange: handleChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "confirmPassword",
                                    children: "Confirm Password"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    id: "confirmPassword",
                                    name: "confirmPassword",
                                    placeholder: "Re-enter your password",
                                    value: formData.confirmPassword,
                                    onChange: handleChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup1,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "role",
                                    children: "Select Role"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "role",
                                    name: "role",
                                    value: formData.role,
                                    onChange: handleChange,
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "student",
                                            children: "Student"
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "admin",
                                            children: "Admin"
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                            children: "Sign Up"
                        }, void 0, false, {
                            fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Or"
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].googleSignup,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f40$react$2d$oauth$2b$google$40$0$2e$12$2e$2_$5f$79ce342f4b6dcbf77f1d5568c05f5cb9$2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleOAuthProvider"], {
                        clientId: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
                        children: ("TURBOPACK compile-time value", "object") !== "undefined" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f40$react$2d$oauth$2b$google$40$0$2e$12$2e$2_$5f$79ce342f4b6dcbf77f1d5568c05f5cb9$2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleLogin"], {
                            onSuccess: async (response)=>{
                                try {
                                    await handleGoogleSuccess(response);
                                    localStorage.setItem("user", JSON.stringify({
                                        name: "Google User",
                                        email: "google@example.com",
                                        role: "student"
                                    }));
                                    router.push("/student/dashboard");
                                } catch (error) {
                                    alert("Google signup failed. Please try again.");
                                }
                            },
                            onError: ()=>alert("Google signup failed."),
                            text: "signup_with"
                        }, void 0, false, {
                            fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                            lineNumber: 146,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switchText,
                    children: [
                        "Already have an account?",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switchLink,
                            children: "Log in here"
                        }, void 0, false, {
                            fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mock-board-project/src/app/components/sign_up/index.jsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(SignupPage, "RYPU/KNkvDdQvOwR15ULnRULDLw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SignupPage;
var _c;
__turbopack_context__.k.register(_c, "SignupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/dashboard/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "styles-module__7KcR8G__active",
  "activityItem": "styles-module__7KcR8G__activityItem",
  "card": "styles-module__7KcR8G__card",
  "content": "styles-module__7KcR8G__content",
  "dashboardContainer": "styles-module__7KcR8G__dashboardContainer",
  "header": "styles-module__7KcR8G__header",
  "icon": "styles-module__7KcR8G__icon",
  "logo": "styles-module__7KcR8G__logo",
  "logoImage": "styles-module__7KcR8G__logoImage",
  "logoImage1": "styles-module__7KcR8G__logoImage1",
  "logoImage2": "styles-module__7KcR8G__logoImage2",
  "logoutBtn": "styles-module__7KcR8G__logoutBtn",
  "mainContent": "styles-module__7KcR8G__mainContent",
  "nav": "styles-module__7KcR8G__nav",
  "navItem": "styles-module__7KcR8G__navItem",
  "pageTitle": "styles-module__7KcR8G__pageTitle",
  "pulse": "styles-module__7KcR8G__pulse",
  "recentActivity": "styles-module__7KcR8G__recentActivity",
  "reviewerHub": "styles-module__7KcR8G__reviewerHub",
  "reviewerHubWrapper": "styles-module__7KcR8G__reviewerHubWrapper",
  "sidebar": "styles-module__7KcR8G__sidebar",
  "startBtn": "styles-module__7KcR8G__startBtn",
  "statNumber": "styles-module__7KcR8G__statNumber",
  "statsCard": "styles-module__7KcR8G__statsCard",
  "statsGrid": "styles-module__7KcR8G__statsGrid",
  "userName": "styles-module__7KcR8G__userName",
  "userProfile": "styles-module__7KcR8G__userProfile",
  "userSection": "styles-module__7KcR8G__userSection",
});
}),
"[project]/mock-board-project/src/app/components/dashboard/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/dashboard/css/styles.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Dashboard({ email }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: ''
    });
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            // Get user data
            try {
                const userStr = localStorage.getItem('user');
                if (userStr) {
                    setUserData(JSON.parse(userStr));
                }
            } catch (error) {
                console.error('Error loading user data:', error);
            }
            // Set active section based on current path
            const path = window.location.pathname;
            const currentSection = menuItems.find({
                "Dashboard.useEffect": (item)=>item.dir === path
            }["Dashboard.useEffect"])?.id || 'home';
            setActiveSection(currentSection);
            const RetrieveData = {
                "Dashboard.useEffect.RetrieveData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].user_data.retrieve_mock_exam, {
                        email: email
                    });
                    if (response.success) {
                        console.log(response.data);
                        setData(response.data);
                    }
                }
            }["Dashboard.useEffect.RetrieveData"];
            RetrieveData();
        }
    }["Dashboard.useEffect"], [
        email
    ]);
    const menuItems = [
        {
            id: 'home',
            label: 'Home',
            dir: '/dashboard'
        },
        {
            id: 'about',
            label: 'About',
            dir: '/about'
        },
        {
            id: 'exam',
            label: 'Exam',
            dir: '/exam'
        },
        {
            id: "testResult",
            label: "Test Result",
            dir: "/test_result"
        },
        {
            id: "reviewer",
            label: "Test Reviewer",
            dir: "/reviewer"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "Mock Board Logo",
                                width: 100,
                                height: 100,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/AYL_LOGO.png",
                                alt: "AYL Logo",
                                width: 100,
                                height: 100,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage1
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/sbit_logo.png",
                                alt: "SBIT Logo",
                                width: 100,
                                height: 100,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage2
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                        children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${activeSection === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: ()=>{
                                    setActiveSection(item.id);
                                    if (item.dir === '/about') {
                                        console.log('Navigating to About page');
                                    }
                                    router.push(item.dir);
                                },
                                children: item.label
                            }, item.id, false, {
                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                lineNumber: 55,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoContainer
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                lineNumber: 85,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userProfile,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: [
                                                    " ",
                                                    email ? email : " --- ",
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                                lineNumber: 93,
                                                columnNumber: 7
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userName,
                                                    children: userData.name
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                                    lineNumber: 95,
                                                    columnNumber: 9
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                                lineNumber: 94,
                                                columnNumber: 7
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                        lineNumber: 92,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutBtn,
                                        onClick: async ()=>{
                                            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("/services/jwt/deauth");
                                            if (response.success) {
                                                alert("Successfully");
                                                router.push('/login');
                                            } else {
                                                alert("Something Went Wrong");
                                            }
                                        },
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                        lineNumber: 100,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                lineNumber: 89,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                        lineNumber: 84,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsGrid,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Mock Exams Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNumber,
                                                children: [
                                                    " ",
                                                    data.message2 ? data.message2.length : 0,
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Mock Exam Assigned"
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNumber,
                                                children: [
                                                    " ",
                                                    data.message ? data.message.length : 0,
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviewerHubWrapper,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviewerHub,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Your Ultimate Reviewer Hub"
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                                lineNumber: 137,
                                                columnNumber: 7
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Where Future Librarians Turn Preparation into Success."
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                                lineNumber: 138,
                                                columnNumber: 7
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].startBtn,
                                                onClick: ()=>router.push('/exam'),
                                                children: "Start Reviewing Now"
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                                lineNumber: 139,
                                                columnNumber: 7
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                        lineNumber: 136,
                                        columnNumber: 5
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                    lineNumber: 135,
                                    columnNumber: 3
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mock-board-project/src/app/components/dashboard/index.jsx",
        lineNumber: 53,
        columnNumber: 7
    }, this);
}
_s(Dashboard, "q9qfLvuunNHwA9huu/MSW95YYNc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/exams/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "styles-module__qp-bkG__active",
  "avatar": "styles-module__qp-bkG__avatar",
  "beginBtn": "styles-module__qp-bkG__beginBtn",
  "card": "styles-module__qp-bkG__card",
  "container": "styles-module__qp-bkG__container",
  "dashboardContainer": "styles-module__qp-bkG__dashboardContainer",
  "examGrid": "styles-module__qp-bkG__examGrid",
  "examSection": "styles-module__qp-bkG__examSection",
  "header": "styles-module__qp-bkG__header",
  "headerSection": "styles-module__qp-bkG__headerSection",
  "instructionBox": "styles-module__qp-bkG__instructionBox",
  "instructionContent": "styles-module__qp-bkG__instructionContent",
  "instructionHeader": "styles-module__qp-bkG__instructionHeader",
  "instructionIcon": "styles-module__qp-bkG__instructionIcon",
  "instructionList": "styles-module__qp-bkG__instructionList",
  "instructionNote": "styles-module__qp-bkG__instructionNote",
  "instructionNumber": "styles-module__qp-bkG__instructionNumber",
  "logo": "styles-module__qp-bkG__logo",
  "logoImage": "styles-module__qp-bkG__logoImage",
  "logoImage1": "styles-module__qp-bkG__logoImage1",
  "logoImage2": "styles-module__qp-bkG__logoImage2",
  "logoutBtn": "styles-module__qp-bkG__logoutBtn",
  "mainContent": "styles-module__qp-bkG__mainContent",
  "nav": "styles-module__qp-bkG__nav",
  "navItem": "styles-module__qp-bkG__navItem",
  "pageTitle": "styles-module__qp-bkG__pageTitle",
  "sidebar": "styles-module__qp-bkG__sidebar",
  "userName": "styles-module__qp-bkG__userName",
  "userProfile": "styles-module__qp-bkG__userProfile",
  "userSection": "styles-module__qp-bkG__userSection",
});
}),
"[project]/mock-board-project/src/app/components/exams/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AvailableExams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/exams/css/styles.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function AvailableExams({ email }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: ''
    });
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("exam");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AvailableExams.useEffect": ()=>{
            // Get user data
            try {
                const userStr = localStorage.getItem('user');
                if (userStr) {
                    setUserData(JSON.parse(userStr));
                }
            } catch (error) {
                console.error('Error loading user data:', error);
            }
            const RetrieveData = {
                "AvailableExams.useEffect.RetrieveData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].user_data.retrieve_mock_exam, {
                        email: email
                    });
                    if (response.success) {
                        setData(response.data.message);
                    }
                }
            }["AvailableExams.useEffect.RetrieveData"];
            RetrieveData();
        }
    }["AvailableExams.useEffect"], []);
    const menuItems = [
        {
            id: "home",
            label: "Home",
            dir: "/dashboard"
        },
        {
            id: "about",
            label: "About",
            dir: "/about"
        },
        {
            id: "exam",
            label: "Exam",
            dir: "/exam"
        },
        {
            id: "testResult",
            label: "Test Result",
            dir: "/test_result"
        },
        {
            id: "reviewer",
            label: "Test Reviewer",
            dir: "/reviewer"
        }
    ];
    const exams = [
        {
            title: "Librarian Licensure Examination (LLE)",
            link: "/part_exam"
        },
        {
            title: "Librarian Licensure Examination (LLE) 2",
            link: "/"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "Mock Board Logo",
                                width: 100,
                                height: 100,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/AYL_LOGO.png",
                                alt: "AYL Logo",
                                width: 100,
                                height: 100,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage1
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/sbit_logo.png",
                                alt: "SBIT Logo",
                                width: 100,
                                height: 100,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage2
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                        children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${activeSection === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                                onClick: ()=>{
                                    setActiveSection(item.id);
                                    router.push(item.dir);
                                },
                                children: item.label
                            }, item.id, false, {
                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageTitle
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userProfile,
                                        children: [
                                            email ? email : " --- ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userName,
                                                    children: userData.name
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutBtn,
                                        onClick: ()=>{
                                            localStorage.removeItem('isAuthenticated');
                                            localStorage.removeItem('user');
                                            router.push('/login');
                                        },
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: [
                                            "BLIS COMPUTER-BASED LICENSURE REVIEW:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                lineNumber: 107,
                                                columnNumber: 54
                                            }, this),
                                            " PRE-BOARD EXAMINATION "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "La Consolacion College Bacolod"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionBox,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionIcon,
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Exam Instructions"
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionList,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionNumber,
                                                                children: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                lineNumber: 122,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Read Carefully:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                        lineNumber: 124,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " You are about to begin the Computer-Based Licensure Review Examination. ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                        lineNumber: 124,
                                                                        columnNumber: 126
                                                                    }, this),
                                                                    "The exam is divided into one continuous session with a total allotted time of 2 hours."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                lineNumber: 123,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                        lineNumber: 121,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionNumber,
                                                                children: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                lineNumber: 128,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Total Exam Time: "
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " You will have 2 hours (120 minutes) to complete the entire examination."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                lineNumber: 129,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                        lineNumber: 127,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionNumber,
                                                                children: "3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                lineNumber: 134,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Navigation and Answering"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " You may skip questions and move forward at any time.",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 115
                                                                    }, this),
                                                                    "You may revisit and review any unanswered or previously answered items as long as you are still within the 2-hour time limit.",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 126
                                                                    }, this),
                                                                    "The system will allow full navigation across all items until time expires."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                lineNumber: 135,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                        lineNumber: 133,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionNumber,
                                                                children: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                lineNumber: 143,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "	Time Limit:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " 	Once the 2-hour timer runs out, the system will automatically submit your answers.",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 134
                                                                    }, this),
                                                                    "Any questions left unanswered at that time will remain blank."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                lineNumber: 144,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                        lineNumber: 142,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionNumber,
                                                                children: "5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                lineNumber: 152,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Submission:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " You may submit the exam early if you finish before the time limit.",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 116
                                                                    }, this),
                                                                    "However, once you click “Submit”, you will not be able to return to the exam."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                lineNumber: 153,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                        lineNumber: 151,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionNote,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                            lineNumber: 162,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                        lineNumber: 161,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "General Guidelines:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                lineNumber: 164,
                                                                columnNumber: 20
                                                            }, this),
                                                            " 	Ensure a stable internet connection and do not close the browser during the exam.",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                                lineNumber: 164,
                                                                columnNumber: 139
                                                            }, this),
                                                            "Use the on-screen tools (flag, mark for review, next/previous) to manage your time efficiently."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                        lineNumber: 164,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].examSection,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].examGrid,
                                    children: exams.map((exam, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: exam.title
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Click to begin review"
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].beginBtn,
                                                    onClick: ()=>router.push(exam.link),
                                                    "aria-label": `Begin review for ${exam.title}`,
                                                    children: "Begin Review"
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mock-board-project/src/app/components/exams/index.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(AvailableExams, "/iz2TYREdv0eIXUQwg9DfIQh+Yc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AvailableExams;
var _c;
__turbopack_context__.k.register(_c, "AvailableExams");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/about/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "aboutSection": "styles-module__UBnObq__aboutSection",
  "active": "styles-module__UBnObq__active",
  "avatar": "styles-module__UBnObq__avatar",
  "content": "styles-module__UBnObq__content",
  "dashboardContainer": "styles-module__UBnObq__dashboardContainer",
  "description": "styles-module__UBnObq__description",
  "header": "styles-module__UBnObq__header",
  "logo": "styles-module__UBnObq__logo",
  "logoImage": "styles-module__UBnObq__logoImage",
  "logoImage1": "styles-module__UBnObq__logoImage1",
  "logoImage2": "styles-module__UBnObq__logoImage2",
  "logoutBtn": "styles-module__UBnObq__logoutBtn",
  "mainContent": "styles-module__UBnObq__mainContent",
  "missionSection": "styles-module__UBnObq__missionSection",
  "missionText": "styles-module__UBnObq__missionText",
  "nav": "styles-module__UBnObq__nav",
  "navItem": "styles-module__UBnObq__navItem",
  "sectionTitle": "styles-module__UBnObq__sectionTitle",
  "sidebar": "styles-module__UBnObq__sidebar",
  "title": "styles-module__UBnObq__title",
  "userName": "styles-module__UBnObq__userName",
  "userProfile": "styles-module__UBnObq__userProfile",
  "userSection": "styles-module__UBnObq__userSection",
  "valueCard": "styles-module__UBnObq__valueCard",
  "valuesGrid": "styles-module__UBnObq__valuesGrid",
  "valuesSection": "styles-module__UBnObq__valuesSection",
  "visionSection": "styles-module__UBnObq__visionSection",
  "visionText": "styles-module__UBnObq__visionText",
});
}),
"[project]/mock-board-project/src/app/components/about/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/about/css/styles.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function About({ email }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: ''
    });
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('about');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            // Get user data
            try {
                const userStr = localStorage.getItem('user');
                if (userStr) {
                    setUserData(JSON.parse(userStr));
                }
            } catch (error) {
                console.error('Error loading user data:', error);
            }
            // Set active section to 'about' when component mounts
            setActiveSection('about');
        }
    }["About.useEffect"], []);
    const menuItems = [
        {
            id: 'home',
            label: 'Home',
            dir: '/dashboard'
        },
        {
            id: 'about',
            label: 'About',
            dir: '/about'
        },
        {
            id: 'exam',
            label: 'Exam',
            dir: '/exam'
        },
        {
            id: "testResult",
            label: "Test Result",
            dir: "/result_test"
        },
        {
            id: "reviewer",
            label: "Test Reviewer",
            dir: "/reviewer"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "Mock Board Logo",
                                width: 100,
                                height: 100,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/AYL_LOGO.png",
                                alt: "AYL Logo",
                                width: 100,
                                height: 100,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage1
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/sbit_logo.png",
                                alt: "SBIT Logo",
                                width: 100,
                                height: 100,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage2
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                        children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${activeSection === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: ()=>{
                                    setActiveSection(item.id);
                                    router.push(item.dir);
                                },
                                children: item.label
                            }, item.id, false, {
                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                lineNumber: 41,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoContainer
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userProfile,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: [
                                                    " ",
                                                    email ? email : " --- ",
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userName,
                                                    children: userData.name
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutBtn,
                                        onClick: ()=>{
                                            localStorage.removeItem('isAuthenticated');
                                            localStorage.removeItem('user');
                                            router.push('/login');
                                        },
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo.png",
                                        alt: "Librarian’s Hub",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                        children: "LCCB Librarian’s Licensure Examination Preparation Portal"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                                        children: "The LCCB Librarian’s Licensure Examination Preparation Portal is an online platform designed to support aspiring librarians in preparing for the Licensure Examination. It provides access to study materials, practice tests, guidance, and resources aligned with professional standards to help students build the knowledge, skills, and confidence needed to succeed."
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].missionSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                        children: " Mission Statement"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].missionText,
                                        children: "The LCCB Bachelor of Library and Information Science program forms competent and ethical information professionals grounded in Catholic Augustinian core values. It equips students with the skills to manage, organize, and share information effectively, fostering lifelong learning and service to the community."
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visionSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                        children: "Vision Statement"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visionText,
                                        children: "The LCCB Bachelor of Library and Information Science program envisions producing exemplary information professionals who, guided by Catholic Augustinian core values, lead in the ethical management and dissemination of knowledge, promote lifelong learning, and serve the community with integrity and compassion."
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].valuesSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                        children: " LCCB Core Values"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].valuesGrid,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].valueCard,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Christ-Centeredness"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "We are to model Jesus Christ in all that we do. The Lordship of Christ should be evident in every aspect of our education, relationships and endeavour at LCCB."
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                        lineNumber: 126,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].valueCard,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Excellence"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "All of us, individually and collectively, takes pride in the quality of one’s work, insist on thoroughness and integrity in one’s work learns new information and skills to enhance personal and professional growth."
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].valueCard,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Stewardship"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Our Creator blessed us with an abundance of resources. We foster a spirit of service to the college, and committed to being and responsible stewards of the College’s resources and the earth community."
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].valueCard,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Community of Friends"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "We foster a spirit of friendship, unity, and independence based on mutual trust and respect to create a social responsive environment that challenges all of us to listen, to learn and to serve."
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].valueCard,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Diversity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                        lineNumber: 141,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "We are diverse community, but also one, united by a shared commitment to cultural diversity, mutual respect among all persons, and compassion for others, honest and open communication, integrity in all that we do. "
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                                lineNumber: 140,
                                                columnNumber: 18
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mock-board-project/src/app/components/about/index.jsx",
        lineNumber: 39,
        columnNumber: 7
    }, this);
}
_s(About, "w2sQCwmPq3yQ0qggfbyMSeOAs6w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/copy_exam/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "styles-module__z3S3Ja__active",
  "backArrow": "styles-module__z3S3Ja__backArrow",
  "backButton": "styles-module__z3S3Ja__backButton",
  "beginBtn": "styles-module__z3S3Ja__beginBtn",
  "cardDesc": "styles-module__z3S3Ja__cardDesc",
  "cardTitle": "styles-module__z3S3Ja__cardTitle",
  "dashboardContainer": "styles-module__z3S3Ja__dashboardContainer",
  "logo": "styles-module__z3S3Ja__logo",
  "logoImage": "styles-module__z3S3Ja__logoImage",
  "logoImage1": "styles-module__z3S3Ja__logoImage1",
  "logoImage2": "styles-module__z3S3Ja__logoImage2",
  "mainContent": "styles-module__z3S3Ja__mainContent",
  "mainWrapper": "styles-module__z3S3Ja__mainWrapper",
  "nav": "styles-module__z3S3Ja__nav",
  "navItem": "styles-module__z3S3Ja__navItem",
  "pageSubtitle": "styles-module__z3S3Ja__pageSubtitle",
  "pageTitle": "styles-module__z3S3Ja__pageTitle",
  "sidebar": "styles-module__z3S3Ja__sidebar",
  "subjectCard": "styles-module__z3S3Ja__subjectCard",
  "subjectGrid": "styles-module__z3S3Ja__subjectGrid",
});
}),
"[project]/mock-board-project/src/app/components/copy_exam/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PartExam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/copy_exam/css/styles.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PartExam({ email }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [subjects, setSubjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [statusParts, setStatusParts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PartExam.useEffect": ()=>{
            // Get user data
            const RetrieveData = {
                "PartExam.useEffect.RetrieveData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].user_data.retrieve_mock_exam, {
                        email: email
                    });
                    if (response.success) {
                        console.log(response.data.message2);
                        setStatusParts(response.data.message2);
                        setSubjects(response.data.message);
                    }
                }
            }["PartExam.useEffect.RetrieveData"];
            RetrieveData();
        }
    }["PartExam.useEffect"], [
        email
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
                        onClick: ()=>router.push('/exam'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backArrow,
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/copy_exam/index.jsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            "Back to Exams"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/copy_exam/index.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageTitle,
                        children: "Librarian Licensure Examination (LLE) Subjects"
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/copy_exam/index.jsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageSubtitle,
                        children: [
                            "Choose a topic under ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Librarian Licensure Examination (LLE)"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/copy_exam/index.jsx",
                                lineNumber: 46,
                                columnNumber: 34
                            }, this),
                            " to start reviewing."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/copy_exam/index.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subjectGrid,
                        children: subjects.map((item, index)=>{
                            const currentPart = Number(item.parts);
                            const previousPart = currentPart - 1;
                            // Check if current part has already been taken
                            const currentPartStatus = statusParts.find((status)=>Number(status.parts) === currentPart);
                            // Check if previous part exists and was passed
                            const previousPartStatus = statusParts.find((status)=>Number(status.parts) === previousPart);
                            // Disable button if:
                            // 1. Current part has already been taken (Passed or Failed) - no retakes
                            // 2. Previous part exists but hasn't been passed yet
                            let isDisabled = false;
                            let disabledMessage = '';
                            if (currentPartStatus) {
                                isDisabled = true;
                                disabledMessage = `Already taken (${currentPartStatus.status})`;
                            } else if (previousPart > 0 && (!previousPartStatus || previousPartStatus.status?.toLowerCase() !== 'passed')) {
                                isDisabled = true;
                                disabledMessage = `Complete Part ${previousPart} first`;
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subjectCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: item.exam_title
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/copy_exam/index.jsx",
                                        lineNumber: 81,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                                        children: [
                                            " Part ",
                                            item.parts,
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/copy_exam/index.jsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this),
                                    isDisabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#F44336',
                                            fontSize: '0.9rem',
                                            marginTop: '10px'
                                        },
                                        children: disabledMessage
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/copy_exam/index.jsx",
                                        lineNumber: 85,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].beginBtn,
                                        disabled: isDisabled,
                                        style: isDisabled ? {
                                            opacity: 0.5,
                                            cursor: 'not-allowed'
                                        } : {},
                                        onClick: ()=>{
                                            if (isDisabled) return;
                                            localStorage.setItem("exam_id", item.id);
                                            localStorage.setItem("assign_time", item.duration);
                                            localStorage.setItem("assign_by", item.email);
                                            localStorage.setItem("passing_score", item.passing_score || 75);
                                            localStorage.setItem("exam_title", item.exam_title);
                                            localStorage.setItem("parts", item.parts);
                                            localStorage.setItem("category", item.category);
                                            router.push('/part_exam/library-organization');
                                        },
                                        children: isDisabled ? 'Locked' : 'Begin Test'
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/copy_exam/index.jsx",
                                        lineNumber: 90,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/mock-board-project/src/app/components/copy_exam/index.jsx",
                                lineNumber: 80,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/copy_exam/index.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/copy_exam/index.jsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/mock-board-project/src/app/components/copy_exam/index.jsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mock-board-project/src/app/components/copy_exam/index.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(PartExam, "6JxgEi/AZBREYdm53LXg5ITUcWE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PartExam;
var _c;
__turbopack_context__.k.register(_c, "PartExam");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/admin_page/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "styles-module__MiXF6W__active",
  "content": "styles-module__MiXF6W__content",
  "dashboardContainer": "styles-module__MiXF6W__dashboardContainer",
  "header": "styles-module__MiXF6W__header",
  "logo": "styles-module__MiXF6W__logo",
  "logoImage": "styles-module__MiXF6W__logoImage",
  "logoImage1": "styles-module__MiXF6W__logoImage1",
  "logoImage2": "styles-module__MiXF6W__logoImage2",
  "logoutBtn": "styles-module__MiXF6W__logoutBtn",
  "mainContent": "styles-module__MiXF6W__mainContent",
  "nav": "styles-module__MiXF6W__nav",
  "navItem": "styles-module__MiXF6W__navItem",
  "pageTitle": "styles-module__MiXF6W__pageTitle",
  "pulse": "styles-module__MiXF6W__pulse",
  "reviewerHub": "styles-module__MiXF6W__reviewerHub",
  "reviewerHubWrapper": "styles-module__MiXF6W__reviewerHubWrapper",
  "sectionTitle": "styles-module__MiXF6W__sectionTitle",
  "sidebar": "styles-module__MiXF6W__sidebar",
  "startBtn": "styles-module__MiXF6W__startBtn",
  "statNumber": "styles-module__MiXF6W__statNumber",
  "statsCard": "styles-module__MiXF6W__statsCard",
  "statsGrid": "styles-module__MiXF6W__statsGrid",
  "userEmail": "styles-module__MiXF6W__userEmail",
  "userInfo": "styles-module__MiXF6W__userInfo",
  "userName": "styles-module__MiXF6W__userName",
  "userProfile": "styles-module__MiXF6W__userProfile",
  "userSection": "styles-module__MiXF6W__userSection",
});
}),
"[project]/mock-board-project/src/app/components/admin_page/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/admin_page/css/styles.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AdminDashboard({ email }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [adminData, setAdminData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: ""
    });
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("adminHome");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [examData, setExamData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const adminMenuItems = [
        {
            id: "adminHome",
            label: "Dashboard",
            dir: "/admin"
        },
        {
            id: "manageUsers",
            label: "Manage Users",
            dir: "/manage_users"
        },
        {
            id: "manageExams",
            label: "Manage Exams",
            dir: "/manage_exams"
        },
        {
            id: "examResult",
            label: "Exam Result",
            dir: "/exam_result"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            try {
                const adminStr = localStorage.getItem("admin");
                if (adminStr) {
                    setAdminData(JSON.parse(adminStr));
                }
            } catch (error) {
                console.error("Error loading admin data:", error);
            }
            const RetrieveUserData = {
                "AdminDashboard.useEffect.RetrieveUserData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].admin.retrieve_user_assign_by, {
                        email: email
                    });
                    if (response.success) {
                        setUserData(response.data.message);
                    }
                }
            }["AdminDashboard.useEffect.RetrieveUserData"];
            RetrieveUserData();
            const RetrieveData = {
                "AdminDashboard.useEffect.RetrieveData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].storage.retrieve, {
                        email: email
                    });
                    if (response.success) {
                        setData(response.data.message);
                    }
                }
            }["AdminDashboard.useEffect.RetrieveData"];
            RetrieveData();
            const RetrieveExamData = {
                "AdminDashboard.useEffect.RetrieveExamData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].admin.exam_result, {
                        email: email
                    });
                    if (response.success) {
                        setExamData(response.data.message);
                    }
                }
            }["AdminDashboard.useEffect.RetrieveExamData"];
            RetrieveExamData();
            // Detect active page
            const path = window.location.pathname;
            const currentSection = adminMenuItems.find({
                "AdminDashboard.useEffect": (item)=>item.dir === path
            }["AdminDashboard.useEffect"])?.id || "adminHome";
            setActiveSection(currentSection);
        }
    }["AdminDashboard.useEffect"], [
        email
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                    children: adminMenuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${activeSection === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                            onClick: ()=>{
                                setActiveSection(item.id);
                                router.push(item.dir);
                            },
                            children: item.label
                        }, item.id, false, {
                            fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userProfile,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userName,
                                                    children: adminData.name
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userEmail,
                                                    children: adminData.email
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutBtn,
                                        onClick: async ()=>{
                                            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("/services/jwt/deauth");
                                            if (response.success) {
                                                alert("Successfully");
                                                router.push('/login');
                                            } else {
                                                alert("Something Went Wrong");
                                            }
                                        },
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Admin Dashboard Overview"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsGrid,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Total Users"
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNumber,
                                                children: [
                                                    " ",
                                                    userData ? userData.length : 0,
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Mock Exams Created"
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNumber,
                                                children: [
                                                    " ",
                                                    data ? data.length : 0,
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Completed Exam Sessions"
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNumber,
                                                children: [
                                                    " ",
                                                    examData ? examData.length : 0,
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviewerHubWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviewerHub,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Admin Control Center"
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Manage users, exams, results, and system settings."
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].startBtn,
                                            onClick: ()=>router.push("/manage_users"),
                                            children: "Manage Users"
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
        lineNumber: 65,
        columnNumber: 7
    }, this);
}
_s(AdminDashboard, "AHKP8MMCUZiDAEop/ZPfYKZiQ2I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/manage_users/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionBtns": "styles-module__5-Ubiq__actionBtns",
  "active": "styles-module__5-Ubiq__active",
  "addButton": "styles-module__5-Ubiq__addButton",
  "avatar": "styles-module__5-Ubiq__avatar",
  "breadcrumb": "styles-module__5-Ubiq__breadcrumb",
  "content": "styles-module__5-Ubiq__content",
  "dashboardContainer": "styles-module__5-Ubiq__dashboardContainer",
  "deleteIcon": "styles-module__5-Ubiq__deleteIcon",
  "draft": "styles-module__5-Ubiq__draft",
  "editIcon": "styles-module__5-Ubiq__editIcon",
  "header": "styles-module__5-Ubiq__header",
  "logoutBtn": "styles-module__5-Ubiq__logoutBtn",
  "mainContent": "styles-module__5-Ubiq__mainContent",
  "nav": "styles-module__5-Ubiq__nav",
  "navItem": "styles-module__5-Ubiq__navItem",
  "published": "styles-module__5-Ubiq__published",
  "searchInput": "styles-module__5-Ubiq__searchInput",
  "sectionTitle": "styles-module__5-Ubiq__sectionTitle",
  "sidebar": "styles-module__5-Ubiq__sidebar",
  "studentAvatar": "styles-module__5-Ubiq__studentAvatar",
  "studentCell": "styles-module__5-Ubiq__studentCell",
  "table": "styles-module__5-Ubiq__table",
  "tableWrapper": "styles-module__5-Ubiq__tableWrapper",
  "topBar": "styles-module__5-Ubiq__topBar",
  "userEmail": "styles-module__5-Ubiq__userEmail",
  "userInfo": "styles-module__5-Ubiq__userInfo",
  "userName": "styles-module__5-Ubiq__userName",
  "userProfile": "styles-module__5-Ubiq__userProfile",
  "userSection": "styles-module__5-Ubiq__userSection",
  "viewBtn": "styles-module__5-Ubiq__viewBtn",
});
}),
"[project]/mock-board-project/src/app/components/manage_users/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManageUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/manage_users/css/styles.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ManageUsers({ email }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [adminData, setAdminData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: ""
    });
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("manageUsers");
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const adminMenuItems = [
        {
            id: "adminHome",
            label: "Dashboard",
            dir: "/admin"
        },
        {
            id: "manageUsers",
            label: "Manage Users",
            dir: "/manage_users"
        },
        {
            id: "manageExams",
            label: "Manage Exams",
            dir: "/manage_exams"
        },
        {
            id: "examResult",
            label: "Exam Result",
            dir: "/exam_result"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManageUsers.useEffect": ()=>{
            const adminStr = localStorage.getItem("admin");
            if (adminStr) setAdminData(JSON.parse(adminStr));
            const path = window.location.pathname;
            const currentSection = adminMenuItems.find({
                "ManageUsers.useEffect": (i)=>i.dir === path
            }["ManageUsers.useEffect"])?.id || "manageUsers";
            setActiveSection(currentSection);
            const RetrieveUserData = {
                "ManageUsers.useEffect.RetrieveUserData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].admin.retrieve_user_assign_by, {
                        email: email
                    });
                    if (response.success) {
                        setUserData(response.data.message);
                    }
                }
            }["ManageUsers.useEffect.RetrieveUserData"];
            RetrieveUserData();
        }
    }["ManageUsers.useEffect"], [
        email
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                    children: adminMenuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${activeSection === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                            onClick: ()=>{
                                setActiveSection(item.id);
                                router.push(item.dir);
                            },
                            children: item.label
                        }, item.id, false, {
                            fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userProfile,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userName,
                                                children: adminData.name
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userEmail,
                                                children: adminData.email
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutBtn,
                                    onClick: ()=>{
                                        localStorage.removeItem("admin");
                                        router.push("/login");
                                    },
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Manage Users"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumb,
                                children: "Student Status"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topBar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search by name or exam",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addButton,
                                        onClick: ()=>router.push("/add_examinee"),
                                        children: "+ Assign Examinee"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Examinee Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Action"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: userData && userData.length > 0 ? userData.map((user, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].studentCell,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    " ",
                                                                    user.name,
                                                                    " "
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                                lineNumber: 127,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].published,
                                                                style: {
                                                                    backgroundColor: ("TURBOPACK compile-time truthy", 1) ? "#fef3c7" : "TURBOPACK unreachable",
                                                                    color: ("TURBOPACK compile-time truthy", 1) ? "#92400e" : "TURBOPACK unreachable"
                                                                },
                                                                children: [
                                                                    " ",
                                                                    user.status,
                                                                    " "
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                                lineNumber: 129,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionBtns,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewBtn,
                                                                onClick: async ()=>{
                                                                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].admin.unassigned, {
                                                                        email: user.email
                                                                    });
                                                                    if (response.success) {
                                                                        alert("User Successfully Unassigned");
                                                                        window.location.reload();
                                                                    }
                                                                },
                                                                children: "Unassigned"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                                lineNumber: 136,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                            lineNumber: 135,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: " "
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                    lineNumber: 156,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mock-board-project/src/app/components/manage_users/index.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(ManageUsers, "dL74/vOiiXW9jiCLLb7qeYdMoZY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ManageUsers;
var _c;
__turbopack_context__.k.register(_c, "ManageUsers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/manage_exams/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "styles-module__FRAMTq__actions",
  "active": "styles-module__FRAMTq__active",
  "addBtn": "styles-module__FRAMTq__addBtn",
  "avatar": "styles-module__FRAMTq__avatar",
  "content": "styles-module__FRAMTq__content",
  "dashboardContainer": "styles-module__FRAMTq__dashboardContainer",
  "deleteBtn": "styles-module__FRAMTq__deleteBtn",
  "draft": "styles-module__FRAMTq__draft",
  "editBtn": "styles-module__FRAMTq__editBtn",
  "header": "styles-module__FRAMTq__header",
  "logoutBtn": "styles-module__FRAMTq__logoutBtn",
  "mainContent": "styles-module__FRAMTq__mainContent",
  "nav": "styles-module__FRAMTq__nav",
  "navItem": "styles-module__FRAMTq__navItem",
  "published": "styles-module__FRAMTq__published",
  "searchInput": "styles-module__FRAMTq__searchInput",
  "sectionTitle": "styles-module__FRAMTq__sectionTitle",
  "sidebar": "styles-module__FRAMTq__sidebar",
  "table": "styles-module__FRAMTq__table",
  "tableWrapper": "styles-module__FRAMTq__tableWrapper",
  "topControls": "styles-module__FRAMTq__topControls",
  "userEmail": "styles-module__FRAMTq__userEmail",
  "userInfo": "styles-module__FRAMTq__userInfo",
  "userName": "styles-module__FRAMTq__userName",
  "userProfile": "styles-module__FRAMTq__userProfile",
  "userSection": "styles-module__FRAMTq__userSection",
  "viewBtn": "styles-module__FRAMTq__viewBtn",
});
}),
"[project]/mock-board-project/src/app/utilities/SweetAlert2.js [app-client] (ecmascript) <export default as SweetAlert2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SweetAlert2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/SweetAlert2.js [app-client] (ecmascript)");
}),
"[project]/mock-board-project/src/app/utilities/Fetch_download.js [app-client] (ecmascript) <export default as Fetch_download>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fetch_download",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_download.js [app-client] (ecmascript)");
}),
"[project]/mock-board-project/src/app/components/manage_exams/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManageExams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/manage_exams/css/styles.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SweetAlert2$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/SweetAlert2.js [app-client] (ecmascript) <export default as SweetAlert2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_download$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_download.js [app-client] (ecmascript) <export default as Fetch_download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/sweetalert2@11.26.4/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ManageExams({ email }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [adminData, setAdminData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: ""
    });
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("manageUsers");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const adminMenuItems = [
        {
            id: "adminHome",
            label: "Dashboard",
            dir: "/admin"
        },
        {
            id: "manageUsers",
            label: "Manage Users",
            dir: "/manage_users"
        },
        {
            id: "manageExams",
            label: "Manage Exams",
            dir: "/manage_exams"
        },
        {
            id: "examResult",
            label: "Exam Result",
            dir: "/exam_result"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManageExams.useEffect": ()=>{
            const adminStr = localStorage.getItem("admin");
            if (adminStr) setAdminData(JSON.parse(adminStr));
            const path = window.location.pathname;
            const currentSection = adminMenuItems.find({
                "ManageExams.useEffect": (i)=>i.dir === path
            }["ManageExams.useEffect"])?.id || "manageUsers";
            setActiveSection(currentSection);
            const RetrieveData = {
                "ManageExams.useEffect.RetrieveData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].storage.retrieve, {
                        email: email
                    });
                    if (response.success) {
                        setData(response.data.message);
                    }
                }
            }["ManageExams.useEffect.RetrieveData"];
            RetrieveData();
        }
    }["ManageExams.useEffect"], [
        email
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                    children: adminMenuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${activeSection === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                            onClick: ()=>{
                                setActiveSection(item.id);
                                router.push(item.dir);
                            },
                            children: item.label
                        }, item.id, false, {
                            fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userProfile,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userName,
                                                children: adminData.name
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userEmail,
                                                children: adminData.email
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutBtn,
                                    onClick: ()=>{
                                        localStorage.removeItem("admin");
                                        router.push("/login");
                                    },
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Manage Mock Board Exams"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                lineNumber: 98,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topControls,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search mock exams...",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                        lineNumber: 102,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addBtn,
                                        onClick: ()=>{
                                            router.push("/form");
                                        },
                                        children: "➕ Upload Excel File"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                        lineNumber: 108,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                lineNumber: 101,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Exam Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                        lineNumber: 120,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Parts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                        lineNumber: 121,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Items"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                        lineNumber: 122,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Duration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                        lineNumber: 123,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Date Created"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                        lineNumber: 124,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Actions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                        lineNumber: 125,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                lineNumber: 119,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                            lineNumber: 118,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: data && data.length > 0 ? data.map((excel, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                " ",
                                                                excel.exam_title,
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                            lineNumber: 133,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                " part ",
                                                                excel.parts,
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                            lineNumber: 134,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                " ",
                                                                excel.items,
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                            lineNumber: 135,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                " ",
                                                                excel.duration,
                                                                " min "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                            lineNumber: 136,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                " ",
                                                                new Date(excel.created_at).toLocaleDateString("en-US"),
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                            lineNumber: 137,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editBtn,
                                                                    onClick: async ()=>{
                                                                        try {
                                                                            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_download$3e$__["Fetch_download"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].storage.download, {
                                                                                filePath: excel.file_dir,
                                                                                name: excel.exam_title
                                                                            }, {
                                                                                "x-api-key": __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_KEY || ""
                                                                            }, 3, 1000, true // <-- important: expect a Blob
                                                                            );
                                                                            if (!response.success) {
                                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SweetAlert2$3e$__["SweetAlert2"])("Error", `${response.message}`, "error", true, "Okay");
                                                                                return;
                                                                            }
                                                                            // Trigger download
                                                                            const url = window.URL.createObjectURL(response.data);
                                                                            const a = document.createElement("a");
                                                                            a.href = url;
                                                                            a.download = excel.exam_title + ".xlsx";
                                                                            document.body.appendChild(a);
                                                                            a.click();
                                                                            a.remove();
                                                                            window.URL.revokeObjectURL(url);
                                                                        } catch (error) {
                                                                            console.error(error);
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SweetAlert2$3e$__["SweetAlert2"])("Error", "Download failed", "error", true, "Okay");
                                                                        }
                                                                    },
                                                                    children: "Download"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteBtn,
                                                                    onClick: async ()=>{
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SweetAlert2$3e$__["SweetAlert2"])("Deleting", "Please wait...", "info", false, "", false, "", true);
                                                                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].storage.delete, {
                                                                            id: excel.id,
                                                                            filePath: excel.file_dir
                                                                        });
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].close();
                                                                        if (response.success) {
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SweetAlert2$3e$__["SweetAlert2"])("Success", "Deleted!", "success", true, "Okay").then(()=>{
                                                                                window.location.reload();
                                                                            });
                                                                        } else {
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SweetAlert2$3e$__["SweetAlert2"])("Error", response.message || "Upload failed", "error", true, "Confirm").then(()=>{
                                                                                window.location.reload();
                                                                            });
                                                                        }
                                                                    },
                                                                    children: "Delete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                                    lineNumber: 175,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                            lineNumber: 138,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                    lineNumber: 132,
                                                    columnNumber: 13
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                    lineNumber: 201,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                                lineNumber: 200,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                            lineNumber: 129,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                    lineNumber: 117,
                                    columnNumber: 5
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                                lineNumber: 116,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                        lineNumber: 93,
                        columnNumber: 8
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mock-board-project/src/app/components/manage_exams/index.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(ManageExams, "HnxXMZZM+xlxBzQ74ixqL63mTbk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ManageExams;
var _c;
__turbopack_context__.k.register(_c, "ManageExams");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/form/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "aboutSection": "styles-module__J3tZ5G__aboutSection",
  "active": "styles-module__J3tZ5G__active",
  "avatar": "styles-module__J3tZ5G__avatar",
  "content": "styles-module__J3tZ5G__content",
  "dashboardContainer": "styles-module__J3tZ5G__dashboardContainer",
  "description": "styles-module__J3tZ5G__description",
  "fileDetails": "styles-module__J3tZ5G__fileDetails",
  "fileInfo": "styles-module__J3tZ5G__fileInfo",
  "fileName": "styles-module__J3tZ5G__fileName",
  "form": "styles-module__J3tZ5G__form",
  "formActions": "styles-module__J3tZ5G__formActions",
  "formGroup": "styles-module__J3tZ5G__formGroup",
  "formHeader": "styles-module__J3tZ5G__formHeader",
  "formSubtitle": "styles-module__J3tZ5G__formSubtitle",
  "formSummary": "styles-module__J3tZ5G__formSummary",
  "formTitle": "styles-module__J3tZ5G__formTitle",
  "formWrapper": "styles-module__J3tZ5G__formWrapper",
  "header": "styles-module__J3tZ5G__header",
  "input": "styles-module__J3tZ5G__input",
  "label": "styles-module__J3tZ5G__label",
  "labelIcon": "styles-module__J3tZ5G__labelIcon",
  "logo": "styles-module__J3tZ5G__logo",
  "logoImage": "styles-module__J3tZ5G__logoImage",
  "logoImage1": "styles-module__J3tZ5G__logoImage1",
  "logoImage2": "styles-module__J3tZ5G__logoImage2",
  "logoutBtn": "styles-module__J3tZ5G__logoutBtn",
  "mainContent": "styles-module__J3tZ5G__mainContent",
  "missionSection": "styles-module__J3tZ5G__missionSection",
  "missionText": "styles-module__J3tZ5G__missionText",
  "nav": "styles-module__J3tZ5G__nav",
  "navItem": "styles-module__J3tZ5G__navItem",
  "primaryButton": "styles-module__J3tZ5G__primaryButton",
  "secondaryButton": "styles-module__J3tZ5G__secondaryButton",
  "sectionTitle": "styles-module__J3tZ5G__sectionTitle",
  "select": "styles-module__J3tZ5G__select",
  "sidebar": "styles-module__J3tZ5G__sidebar",
  "summaryGrid": "styles-module__J3tZ5G__summaryGrid",
  "summaryItem": "styles-module__J3tZ5G__summaryItem",
  "summaryLabel": "styles-module__J3tZ5G__summaryLabel",
  "summaryTitle": "styles-module__J3tZ5G__summaryTitle",
  "summaryValue": "styles-module__J3tZ5G__summaryValue",
  "title": "styles-module__J3tZ5G__title",
  "uploadButton": "styles-module__J3tZ5G__uploadButton",
  "uploadIcon": "styles-module__J3tZ5G__uploadIcon",
  "uploadSection": "styles-module__J3tZ5G__uploadSection",
  "userName": "styles-module__J3tZ5G__userName",
  "userProfile": "styles-module__J3tZ5G__userProfile",
  "userSection": "styles-module__J3tZ5G__userSection",
  "valueCard": "styles-module__J3tZ5G__valueCard",
  "valuesGrid": "styles-module__J3tZ5G__valuesGrid",
  "valuesSection": "styles-module__J3tZ5G__valuesSection",
  "visionSection": "styles-module__J3tZ5G__visionSection",
  "visionText": "styles-module__J3tZ5G__visionText",
});
}),
"[project]/mock-board-project/src/app/utilities/Fetch_toFile.js [app-client] (ecmascript) <export default as Fetch_toFile>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fetch_toFile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_toFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_toFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_toFile.js [app-client] (ecmascript)");
}),
"[project]/mock-board-project/src/app/components/form/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/xlsx@0.18.5/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/form/css/styles.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SweetAlert2$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/SweetAlert2.js [app-client] (ecmascript) <export default as SweetAlert2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_toFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_toFile$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_toFile.js [app-client] (ecmascript) <export default as Fetch_toFile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/sweetalert2@11.26.4/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Form({ email }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [excelFile, setExcelFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adminData, setAdminData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: email || "",
        duration: "",
        parts: "",
        category: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rowCount, setRowCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Form.useEffect": ()=>{
            setAdminData({
                "Form.useEffect": (prev)=>({
                        ...prev,
                        email: email || ""
                    })
            }["Form.useEffect"]);
        }
    }["Form.useEffect"], [
        email
    ]);
    const UploadExcel = ()=>{
        fileRef.current?.click();
    };
    const HandleFile = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SweetAlert2$3e$__["SweetAlert2"])("Invalid File", "Please select an Excel file (.xlsx)", "warning", true, "Okay");
            return;
        }
        setFileName(file.name);
        setExcelFile(file);
        // ------------ READ EXCEL ROWS ON CLIENT ------------
        const reader = new FileReader();
        reader.onload = async (event)=>{
            const arrayBuffer = event.target.result;
            const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"](arrayBuffer, {
                type: "array"
            });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const rows = __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$xlsx$40$0$2e$18$2e$5$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet);
            setRowCount(rows.length);
            console.log("Excel Rows:", rows);
        };
        reader.readAsArrayBuffer(file);
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setAdminData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // ------------ UPLOAD THE FILE TO BACKEND ------------
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SweetAlert2$3e$__["SweetAlert2"])("Uploading", "Please wait...", "info", false, "", false, "", true);
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_toFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_toFile$3e$__["Fetch_toFile"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].storage.uploadfile, excelFile, {
            email: adminData.email,
            items: rowCount,
            duration: adminData.duration,
            name: adminData.name,
            parts: adminData.parts,
            category: adminData.category
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].close();
        if (response.success) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SweetAlert2$3e$__["SweetAlert2"])("Success", "File uploaded successfully!", "success", true, "Okay");
            fileRef.current.value = "";
            setFileName("");
            setRowCount(0);
            setAdminData((prev)=>({
                    ...prev,
                    name: "",
                    duration: "",
                    parts: ""
                }));
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SweetAlert2$3e$__["SweetAlert2"])("Error", response.message || "Upload failed", "error", true, "Confirm");
            fileRef.current.value = "";
            setFileName("");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formWrapper,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formTitle,
                            children: "Create Exam"
                        }, void 0, false, {
                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formSubtitle,
                            children: "Upload exam questions and configure settings"
                        }, void 0, false, {
                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    htmlFor: "name",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelIcon,
                                            children: "📝"
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        "Exam Name"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    id: "name",
                                    name: "name",
                                    value: adminData.name,
                                    onChange: handleInputChange,
                                    placeholder: "e.g., Final Mathematics Exam",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    htmlFor: "duration",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelIcon,
                                            children: "⏱️"
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        "Duration (minutes)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    id: "duration",
                                    name: "duration",
                                    value: adminData.duration,
                                    onChange: handleInputChange,
                                    placeholder: "60",
                                    min: "1",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    htmlFor: "parts",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelIcon,
                                            children: "📂"
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        "Parts"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    id: "parts",
                                    name: "parts",
                                    value: adminData.parts,
                                    onChange: handleInputChange,
                                    placeholder: "60",
                                    min: "1",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    htmlFor: "parts",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelIcon,
                                            children: "📂"
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        "Select Category"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    name: "category",
                                    id: "category",
                                    value: adminData.category,
                                    onChange: handleInputChange,
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "select"
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "reviewer",
                                            children: "Reviewer"
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "exam",
                                            children: "Exam"
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelIcon,
                                            children: "📊"
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        "Upload Questions (Excel)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: UploadExcel,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadButton,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadIcon,
                                                    children: "📁"
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this),
                                                fileName ? "Change File" : "Choose Excel File"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this),
                                        fileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileInfo,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileName,
                                                    children: [
                                                        "📄 ",
                                                        fileName
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileDetails,
                                                    children: [
                                                        rowCount,
                                                        " questions detected"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: fileRef,
                                    type: "file",
                                    accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                    style: {
                                        display: "none"
                                    },
                                    onChange: HandleFile
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this),
                        adminData.name && adminData.duration && fileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formSummary,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryTitle,
                                    children: "📋 Summary"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 214,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryGrid,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLabel,
                                                    children: "Exam:"
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryValue,
                                                    children: adminData.name
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                                    lineNumber: 218,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLabel,
                                                    children: "Duration:"
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                                    lineNumber: 221,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryValue,
                                                    children: [
                                                        adminData.duration,
                                                        " min"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                                    lineNumber: 222,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                            lineNumber: 220,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLabel,
                                                    children: "Questions:"
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                                    lineNumber: 225,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryValue,
                                                    children: rowCount
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                                    lineNumber: 226,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLabel,
                                                    children: "Admin:"
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                                    lineNumber: 229,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryValue,
                                                    children: adminData.email
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                                    lineNumber: 230,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                            lineNumber: 228,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                            lineNumber: 213,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        router.push("/manage_exams");
                                        setLoading(true);
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryButton,
                                    children: "← Back"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                                    disabled: loading,
                                    children: loading ? "Processing..." : "Create Exam →"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
            lineNumber: 106,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/mock-board-project/src/app/components/form/index.jsx",
        lineNumber: 105,
        columnNumber: 7
    }, this);
}
_s(Form, "7/obBLjyZQ4IEiqXuVPFVqt8QOw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Form;
var _c;
__turbopack_context__.k.register(_c, "Form");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/add_examinee/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionBtns": "styles-module__E7S8TG__actionBtns",
  "active": "styles-module__E7S8TG__active",
  "addButton": "styles-module__E7S8TG__addButton",
  "avatar": "styles-module__E7S8TG__avatar",
  "breadcrumb": "styles-module__E7S8TG__breadcrumb",
  "content": "styles-module__E7S8TG__content",
  "dashboardContainer": "styles-module__E7S8TG__dashboardContainer",
  "deleteIcon": "styles-module__E7S8TG__deleteIcon",
  "draft": "styles-module__E7S8TG__draft",
  "editIcon": "styles-module__E7S8TG__editIcon",
  "header": "styles-module__E7S8TG__header",
  "logoutBtn": "styles-module__E7S8TG__logoutBtn",
  "mainContent": "styles-module__E7S8TG__mainContent",
  "nav": "styles-module__E7S8TG__nav",
  "navItem": "styles-module__E7S8TG__navItem",
  "published": "styles-module__E7S8TG__published",
  "searchInput": "styles-module__E7S8TG__searchInput",
  "sectionTitle": "styles-module__E7S8TG__sectionTitle",
  "sidebar": "styles-module__E7S8TG__sidebar",
  "studentAvatar": "styles-module__E7S8TG__studentAvatar",
  "studentCell": "styles-module__E7S8TG__studentCell",
  "table": "styles-module__E7S8TG__table",
  "tableWrapper": "styles-module__E7S8TG__tableWrapper",
  "topBar": "styles-module__E7S8TG__topBar",
  "userEmail": "styles-module__E7S8TG__userEmail",
  "userInfo": "styles-module__E7S8TG__userInfo",
  "userName": "styles-module__E7S8TG__userName",
  "userProfile": "styles-module__E7S8TG__userProfile",
  "userSection": "styles-module__E7S8TG__userSection",
  "viewBtn": "styles-module__E7S8TG__viewBtn",
});
}),
"[project]/mock-board-project/src/app/components/add_examinee/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManageUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/add_examinee/css/styles.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ManageUsers({ email }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [adminData, setAdminData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: ""
    });
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("manageUsers");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const adminMenuItems = [
        {
            id: "adminHome",
            label: "Dashboard",
            dir: "/admin"
        },
        {
            id: "manageUsers",
            label: "Manage Users",
            dir: "/manage_users"
        },
        {
            id: "manageExams",
            label: "Manage Exams",
            dir: "/manage_exams"
        },
        {
            id: "examResult",
            label: "Exam Result",
            dir: "/exam_result"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManageUsers.useEffect": ()=>{
            const adminStr = localStorage.getItem("admin");
            if (adminStr) setAdminData(JSON.parse(adminStr));
            const path = window.location.pathname;
            const currentSection = adminMenuItems.find({
                "ManageUsers.useEffect": (i)=>i.dir === path
            }["ManageUsers.useEffect"])?.id || "manageUsers";
            setActiveSection(currentSection);
            const RetrieveUserData = {
                "ManageUsers.useEffect.RetrieveUserData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].admin.retrieve_all_user);
                    if (response.success) {
                        setData(response.data.message);
                    }
                }
            }["ManageUsers.useEffect.RetrieveUserData"];
            RetrieveUserData();
        }
    }["ManageUsers.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                    children: adminMenuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${activeSection === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                            onClick: ()=>{
                                setActiveSection(item.id);
                                router.push(item.dir);
                            },
                            children: item.label
                        }, item.id, false, {
                            fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userProfile,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userName,
                                                children: adminData.name
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userEmail,
                                                children: adminData.email
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutBtn,
                                    onClick: ()=>{
                                        localStorage.removeItem("admin");
                                        router.push("/login");
                                    },
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Assign Examinee"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumb,
                                children: "Student"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topBar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search by name or exam",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addButton,
                                        onClick: ()=>router.push("/manage_users"),
                                        children: "Manage Users"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {}, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Examinee Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Action"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                        lineNumber: 119,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: data && data.length > 0 ? data.map((user, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                                lineNumber: 128,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                            lineNumber: 128,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].studentCell,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    " ",
                                                                    user.name,
                                                                    " "
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                                lineNumber: 131,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                            lineNumber: 130,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                " ",
                                                                user.email,
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                            lineNumber: 134,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].published,
                                                                children: [
                                                                    " ",
                                                                    user.role,
                                                                    " "
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                                lineNumber: 135,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                            lineNumber: 135,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionBtns,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewBtn,
                                                                onClick: async ()=>{
                                                                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].admin.assigned, {
                                                                        id: user.id,
                                                                        email: email
                                                                    });
                                                                    if (response.success) {
                                                                        alert("User Assign", user.name, " to ", email);
                                                                        window.location.reload();
                                                                    }
                                                                },
                                                                children: "Assign"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                                lineNumber: 138,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                            lineNumber: 137,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                    lineNumber: 127,
                                                    columnNumber: 21
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                                lineNumber: 158,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mock-board-project/src/app/components/add_examinee/index.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(ManageUsers, "HnxXMZZM+xlxBzQ74ixqL63mTbk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ManageUsers;
var _c;
__turbopack_context__.k.register(_c, "ManageUsers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/exam_result/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionBtns": "styles-module__7_dU0G__actionBtns",
  "active": "styles-module__7_dU0G__active",
  "addButton": "styles-module__7_dU0G__addButton",
  "avatar": "styles-module__7_dU0G__avatar",
  "breadcrumb": "styles-module__7_dU0G__breadcrumb",
  "content": "styles-module__7_dU0G__content",
  "dashboardContainer": "styles-module__7_dU0G__dashboardContainer",
  "deleteIcon": "styles-module__7_dU0G__deleteIcon",
  "draft": "styles-module__7_dU0G__draft",
  "editIcon": "styles-module__7_dU0G__editIcon",
  "header": "styles-module__7_dU0G__header",
  "logoutBtn": "styles-module__7_dU0G__logoutBtn",
  "mainContent": "styles-module__7_dU0G__mainContent",
  "nav": "styles-module__7_dU0G__nav",
  "navItem": "styles-module__7_dU0G__navItem",
  "published": "styles-module__7_dU0G__published",
  "searchInput": "styles-module__7_dU0G__searchInput",
  "sectionTitle": "styles-module__7_dU0G__sectionTitle",
  "sidebar": "styles-module__7_dU0G__sidebar",
  "studentAvatar": "styles-module__7_dU0G__studentAvatar",
  "studentCell": "styles-module__7_dU0G__studentCell",
  "table": "styles-module__7_dU0G__table",
  "tableWrapper": "styles-module__7_dU0G__tableWrapper",
  "topBar": "styles-module__7_dU0G__topBar",
  "userEmail": "styles-module__7_dU0G__userEmail",
  "userInfo": "styles-module__7_dU0G__userInfo",
  "userName": "styles-module__7_dU0G__userName",
  "userProfile": "styles-module__7_dU0G__userProfile",
  "userSection": "styles-module__7_dU0G__userSection",
  "viewBtn": "styles-module__7_dU0G__viewBtn",
});
}),
"[project]/mock-board-project/src/app/components/exam_result/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExamResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/exam_result/css/styles.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ExamResult({ email }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [adminData, setAdminData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: ""
    });
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("manageUsers");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const adminMenuItems = [
        {
            id: "adminHome",
            label: "Dashboard",
            dir: "/admin"
        },
        {
            id: "manageUsers",
            label: "Manage Users",
            dir: "/manage_users"
        },
        {
            id: "manageExams",
            label: "Manage Exams",
            dir: "/manage_exams"
        },
        {
            id: "examResult",
            label: "Exam Result",
            dir: "/exam_result"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExamResult.useEffect": ()=>{
            const adminStr = localStorage.getItem("admin");
            if (adminStr) setAdminData(JSON.parse(adminStr));
            const path = window.location.pathname;
            const currentSection = adminMenuItems.find({
                "ExamResult.useEffect": (i)=>i.dir === path
            }["ExamResult.useEffect"])?.id || "manageUsers";
            setActiveSection(currentSection);
            const RetrieveUserData = {
                "ExamResult.useEffect.RetrieveUserData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].admin.exam_result, {
                        email: email
                    });
                    if (response.success) {
                        setData(response.data.message);
                    }
                }
            }["ExamResult.useEffect.RetrieveUserData"];
            RetrieveUserData();
        }
    }["ExamResult.useEffect"], [
        email
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                    children: adminMenuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${activeSection === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                            onClick: ()=>{
                                setActiveSection(item.id);
                                router.push(item.dir);
                            },
                            children: item.label
                        }, item.id, false, {
                            fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userProfile,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userName,
                                                children: adminData.name
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userEmail,
                                                children: adminData.email
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutBtn,
                                    onClick: ()=>{
                                        localStorage.removeItem("admin");
                                        router.push("/login");
                                    },
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Exam Result"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumb,
                                children: "Result"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topBar,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search by name or exam",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Examinee Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Exam Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Parts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Passing Score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: data && data.length > 0 ? data.map((data, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].studentCell,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    " ",
                                                                    data.examinee_name,
                                                                    " "
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                                lineNumber: 124,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                            lineNumber: 123,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                " ",
                                                                data.exam_title,
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                            lineNumber: 127,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                " Part ",
                                                                data.parts,
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                            lineNumber: 128,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].published,
                                                                style: {
                                                                    color: "#92400e"
                                                                },
                                                                children: [
                                                                    " ",
                                                                    data.score,
                                                                    " "
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                                lineNumber: 129,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                " ",
                                                                data.passing_score,
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                            lineNumber: 133,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                " ",
                                                                data.status,
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                            lineNumber: 134,
                                                            columnNumber: 20
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                " ",
                                                                data.category,
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                            lineNumber: 135,
                                                            columnNumber: 20
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: " "
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mock-board-project/src/app/components/exam_result/index.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(ExamResult, "HnxXMZZM+xlxBzQ74ixqL63mTbk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ExamResult;
var _c;
__turbopack_context__.k.register(_c, "ExamResult");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/result_test/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionBtns": "styles-module__Q0qhQa__actionBtns",
  "active": "styles-module__Q0qhQa__active",
  "addButton": "styles-module__Q0qhQa__addButton",
  "answerCard": "styles-module__Q0qhQa__answerCard",
  "answerDetails": "styles-module__Q0qhQa__answerDetails",
  "answersGrid": "styles-module__Q0qhQa__answersGrid",
  "avatar": "styles-module__Q0qhQa__avatar",
  "breadcrumb": "styles-module__Q0qhQa__breadcrumb",
  "content": "styles-module__Q0qhQa__content",
  "correct": "styles-module__Q0qhQa__correct",
  "correctAnswer": "styles-module__Q0qhQa__correctAnswer",
  "dashboardContainer": "styles-module__Q0qhQa__dashboardContainer",
  "deleteIcon": "styles-module__Q0qhQa__deleteIcon",
  "detailsContainer": "styles-module__Q0qhQa__detailsContainer",
  "detailsTitle": "styles-module__Q0qhQa__detailsTitle",
  "draft": "styles-module__Q0qhQa__draft",
  "editIcon": "styles-module__Q0qhQa__editIcon",
  "expandedRow": "styles-module__Q0qhQa__expandedRow",
  "header": "styles-module__Q0qhQa__header",
  "logoutBtn": "styles-module__Q0qhQa__logoutBtn",
  "mainContent": "styles-module__Q0qhQa__mainContent",
  "nav": "styles-module__Q0qhQa__nav",
  "navItem": "styles-module__Q0qhQa__navItem",
  "noData": "styles-module__Q0qhQa__noData",
  "published": "styles-module__Q0qhQa__published",
  "questionNumber": "styles-module__Q0qhQa__questionNumber",
  "scoreTag": "styles-module__Q0qhQa__scoreTag",
  "searchInput": "styles-module__Q0qhQa__searchInput",
  "sectionTitle": "styles-module__Q0qhQa__sectionTitle",
  "sidebar": "styles-module__Q0qhQa__sidebar",
  "statusFailed": "styles-module__Q0qhQa__statusFailed",
  "statusIcon": "styles-module__Q0qhQa__statusIcon",
  "statusPassed": "styles-module__Q0qhQa__statusPassed",
  "statusTag": "styles-module__Q0qhQa__statusTag",
  "studentAvatar": "styles-module__Q0qhQa__studentAvatar",
  "studentCell": "styles-module__Q0qhQa__studentCell",
  "summaryItem": "styles-module__Q0qhQa__summaryItem",
  "summaryLabel": "styles-module__Q0qhQa__summaryLabel",
  "summarySection": "styles-module__Q0qhQa__summarySection",
  "summaryValue": "styles-module__Q0qhQa__summaryValue",
  "table": "styles-module__Q0qhQa__table",
  "tableWrapper": "styles-module__Q0qhQa__tableWrapper",
  "topBar": "styles-module__Q0qhQa__topBar",
  "userEmail": "styles-module__Q0qhQa__userEmail",
  "userInfo": "styles-module__Q0qhQa__userInfo",
  "userName": "styles-module__Q0qhQa__userName",
  "userProfile": "styles-module__Q0qhQa__userProfile",
  "userSection": "styles-module__Q0qhQa__userSection",
  "viewBtn": "styles-module__Q0qhQa__viewBtn",
  "viewDetailsBtn": "styles-module__Q0qhQa__viewDetailsBtn",
  "wrong": "styles-module__Q0qhQa__wrong",
  "wrongAnswer": "styles-module__Q0qhQa__wrongAnswer",
});
}),
"[project]/mock-board-project/src/app/components/result_test/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultTest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/result_test/css/styles.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ResultTest({ email }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: email || ""
    });
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("test_result");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [expandedRow, setExpandedRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const menuItems = [
        {
            id: 'home',
            label: 'Home',
            dir: '/dashboard'
        },
        {
            id: 'about',
            label: 'About',
            dir: '/about'
        },
        {
            id: 'exam',
            label: 'Exam',
            dir: '/exam'
        },
        {
            id: "testResult",
            label: "Test Result",
            dir: "/test_result"
        },
        {
            id: "reviewer",
            label: "Test Reviewer",
            dir: "/reviewer"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultTest.useEffect": ()=>{
            setUserData({
                "ResultTest.useEffect": (prev)=>({
                        ...prev,
                        email: email
                    })
            }["ResultTest.useEffect"]);
            const FetchData = {
                "ResultTest.useEffect.FetchData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].user_data.exam_result, {
                        email: email
                    });
                    if (response.success) {
                        setData(response.data.message);
                    }
                }
            }["ResultTest.useEffect.FetchData"];
            FetchData();
        }
    }["ResultTest.useEffect"], [
        email
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                    children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${activeSection === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                            onClick: ()=>{
                                setActiveSection(item.id);
                                router.push(item.dir);
                            },
                            children: item.label
                        }, item.id, false, {
                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userProfile,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userName,
                                                children: userData.name
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userEmail,
                                                children: userData.email
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutBtn,
                                    onClick: ()=>{
                                        localStorage.removeItem("user");
                                        router.push("/login");
                                    },
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Exam Result"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumb,
                                children: "Result"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topBar,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search by name or exam",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Exam Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Parts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Passing Score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Actions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: data && data.length > 0 ? data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: [
                                                                        " ",
                                                                        item.exam_title,
                                                                        " "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                    lineNumber: 127,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: [
                                                                        " Part ",
                                                                        item.parts,
                                                                        " "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scoreTag,
                                                                        children: item.score
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: [
                                                                        " ",
                                                                        item.passing_score,
                                                                        " "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusTag} ${item.status === "passed" ? __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusPassed : __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusFailed}`,
                                                                        children: item.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewDetailsBtn,
                                                                        onClick: ()=>setExpandedRow(expandedRow === index ? null : index),
                                                                        children: expandedRow === index ? "Hide Details" : "View Details"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                            lineNumber: 124,
                                                            columnNumber: 23
                                                        }, this),
                                                        expandedRow === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].expandedRow,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: "7",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailsContainer,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailsTitle,
                                                                            children: "Question-by-Question Results"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                            lineNumber: 157,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        item.answers && item.answers.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answersGrid,
                                                                            children: item.answers.map((answer, ansIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerCard} ${answer.is_correct ? __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].correctAnswer : __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrongAnswer}`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].questionNumber,
                                                                                            children: [
                                                                                                "Question #",
                                                                                                ansIndex + 1,
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusIcon,
                                                                                                    children: answer.is_correct ? "✓" : "✗"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                                    lineNumber: 170,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                            lineNumber: 168,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerDetails,
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                            children: "Question:"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                                            lineNumber: 175,
                                                                                                            columnNumber: 44
                                                                                                        }, this),
                                                                                                        " ",
                                                                                                        answer.question || "N/A"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                                    lineNumber: 175,
                                                                                                    columnNumber: 41
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                            children: "Examinee's Answer:"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                                            lineNumber: 176,
                                                                                                            columnNumber: 44
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: answer.is_correct ? __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].correct : __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrong,
                                                                                                            children: answer.examinee_answer || "No answer"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                                            lineNumber: 177,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                                    lineNumber: 176,
                                                                                                    columnNumber: 41
                                                                                                }, this),
                                                                                                !answer.is_correct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                            children: "Correct Answer:"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                                            lineNumber: 182,
                                                                                                            columnNumber: 46
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].correct,
                                                                                                            children: answer.correct_answer
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                                            lineNumber: 183,
                                                                                                            columnNumber: 45
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                                    lineNumber: 182,
                                                                                                    columnNumber: 43
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                            lineNumber: 174,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, ansIndex, true, {
                                                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                    lineNumber: 162,
                                                                                    columnNumber: 37
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                            lineNumber: 160,
                                                                            columnNumber: 33
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noData,
                                                                            children: "No detailed answer data available"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                            lineNumber: 193,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summarySection,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryItem,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLabel,
                                                                                            children: "Correct Answers:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                            lineNumber: 198,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryValue} ${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].correct}`,
                                                                                            children: item.score
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                            lineNumber: 199,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                    lineNumber: 197,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryItem,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLabel,
                                                                                            children: "Passign Score: "
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                            lineNumber: 204,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryValue} ${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrong}`,
                                                                                            children: item.passing_score
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                            lineNumber: 205,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                                    lineNumber: 203,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                            lineNumber: 196,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                                lineNumber: 155,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                            lineNumber: 154,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: "7",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noData,
                                                    children: "No results found"
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                    lineNumber: 218,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mock-board-project/src/app/components/result_test/index.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(ResultTest, "vnidHGfkRC1CK+od0vVpWwaRVD8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ResultTest;
var _c;
__turbopack_context__.k.register(_c, "ResultTest");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/reviewer/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "styles-module__z2wFzG__active",
  "avatar": "styles-module__z2wFzG__avatar",
  "beginBtn": "styles-module__z2wFzG__beginBtn",
  "card": "styles-module__z2wFzG__card",
  "container": "styles-module__z2wFzG__container",
  "dashboardContainer": "styles-module__z2wFzG__dashboardContainer",
  "examGrid": "styles-module__z2wFzG__examGrid",
  "examSection": "styles-module__z2wFzG__examSection",
  "header": "styles-module__z2wFzG__header",
  "headerSection": "styles-module__z2wFzG__headerSection",
  "instructionBox": "styles-module__z2wFzG__instructionBox",
  "instructionContent": "styles-module__z2wFzG__instructionContent",
  "instructionHeader": "styles-module__z2wFzG__instructionHeader",
  "instructionIcon": "styles-module__z2wFzG__instructionIcon",
  "instructionList": "styles-module__z2wFzG__instructionList",
  "instructionNote": "styles-module__z2wFzG__instructionNote",
  "instructionNumber": "styles-module__z2wFzG__instructionNumber",
  "logo": "styles-module__z2wFzG__logo",
  "logoImage": "styles-module__z2wFzG__logoImage",
  "logoImage1": "styles-module__z2wFzG__logoImage1",
  "logoImage2": "styles-module__z2wFzG__logoImage2",
  "logoutBtn": "styles-module__z2wFzG__logoutBtn",
  "mainContent": "styles-module__z2wFzG__mainContent",
  "nav": "styles-module__z2wFzG__nav",
  "navItem": "styles-module__z2wFzG__navItem",
  "pageTitle": "styles-module__z2wFzG__pageTitle",
  "sidebar": "styles-module__z2wFzG__sidebar",
  "userName": "styles-module__z2wFzG__userName",
  "userProfile": "styles-module__z2wFzG__userProfile",
  "userSection": "styles-module__z2wFzG__userSection",
});
}),
"[project]/mock-board-project/src/app/components/reviewer/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reviewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/reviewer/css/styles.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Reviewer({ email }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: ''
    });
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("reviewer");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reviewer.useEffect": ()=>{
            // Get user data
            try {
                const userStr = localStorage.getItem('user');
                if (userStr) {
                    setUserData(JSON.parse(userStr));
                }
            } catch (error) {
                console.error('Error loading user data:', error);
            }
            const RetrieveData = {
                "Reviewer.useEffect.RetrieveData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].user_data.retrieve_mock_exam, {
                        email: email
                    });
                    if (response.success) {
                        setData(response.data.message);
                    }
                }
            }["Reviewer.useEffect.RetrieveData"];
            RetrieveData();
        }
    }["Reviewer.useEffect"], []);
    const menuItems = [
        {
            id: "home",
            label: "Home",
            dir: "/dashboard"
        },
        {
            id: "about",
            label: "About",
            dir: "/about"
        },
        {
            id: "exam",
            label: "Exam",
            dir: "/exam"
        },
        {
            id: "testResult",
            label: "Test Result",
            dir: "/test_result"
        },
        {
            id: "reviewer",
            label: "Reviewer",
            dir: "/reviewer"
        }
    ];
    const exams = [
        {
            title: "Librarian Licensure Examination (LLE)"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "Mock Board Logo",
                                width: 100,
                                height: 100,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/AYL_LOGO.png",
                                alt: "AYL Logo",
                                width: 100,
                                height: 100,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage1
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/sbit_logo.png",
                                alt: "SBIT Logo",
                                width: 100,
                                height: 100,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage2
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                        children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${activeSection === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                                onClick: ()=>{
                                    setActiveSection(item.id);
                                    router.push(item.dir);
                                },
                                children: item.label
                            }, item.id, false, {
                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageTitle
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userProfile,
                                        children: [
                                            email ? email : " --- ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userName,
                                                    children: userData.name
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutBtn,
                                        onClick: ()=>{
                                            localStorage.removeItem('isAuthenticated');
                                            localStorage.removeItem('user');
                                            router.push('/login');
                                        },
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: [
                                            "BLIS COMPUTER-BASED LICENSURE REVIEW:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                lineNumber: 108,
                                                columnNumber: 54
                                            }, this),
                                            " PRE-BOARD EXAMINATION "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "La Consolacion College Bacolod"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionBox,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionIcon,
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Exam Instructions"
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionList,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionNumber,
                                                                children: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                lineNumber: 123,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Read Carefully:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                        lineNumber: 125,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " You are about to begin the Computer-Based Licensure Review Examination. ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                        lineNumber: 125,
                                                                        columnNumber: 126
                                                                    }, this),
                                                                    "The exam is divided into one continuous session with a total allotted time of 2 hours."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                lineNumber: 124,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                        lineNumber: 122,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionNumber,
                                                                children: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                lineNumber: 129,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Total Exam Time: "
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " You will have 2 hours (120 minutes) to complete the entire examination."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                lineNumber: 130,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                        lineNumber: 128,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionNumber,
                                                                children: "3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                lineNumber: 135,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Navigation and Answering"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " You may skip questions and move forward at any time.",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 115
                                                                    }, this),
                                                                    "You may revisit and review any unanswered or previously answered items as long as you are still within the 2-hour time limit.",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 126
                                                                    }, this),
                                                                    "The system will allow full navigation across all items until time expires."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                lineNumber: 136,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                        lineNumber: 134,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionNumber,
                                                                children: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                lineNumber: 144,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "	Time Limit:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " 	Once the 2-hour timer runs out, the system will automatically submit your answers.",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 134
                                                                    }, this),
                                                                    "Any questions left unanswered at that time will remain blank."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                lineNumber: 145,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                        lineNumber: 143,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionNumber,
                                                                children: "5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                lineNumber: 153,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Submission:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                        lineNumber: 155,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " You may submit the exam early if you finish before the time limit.",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                        lineNumber: 155,
                                                                        columnNumber: 116
                                                                    }, this),
                                                                    "However, once you click “Submit”, you will not be able to return to the exam."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                lineNumber: 154,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                        lineNumber: 152,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].instructionNote,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                            lineNumber: 163,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                        lineNumber: 162,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "General Guidelines:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 20
                                                            }, this),
                                                            " 	Ensure a stable internet connection and do not close the browser during the exam.",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 139
                                                            }, this),
                                                            "Use the on-screen tools (flag, mark for review, next/previous) to manage your time efficiently."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].examSection,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].examGrid,
                                    children: exams.map((exam, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: exam.title
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Click to begin review"
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].beginBtn,
                                                    onClick: ()=>router.push('/part_exam_review'),
                                                    "aria-label": `Begin review for ${exam.title}`,
                                                    children: "Begin Review"
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mock-board-project/src/app/components/reviewer/index.jsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(Reviewer, "X1L0UWi4B2pyVp3xYp+uybEMwEk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Reviewer;
var _c;
__turbopack_context__.k.register(_c, "Reviewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/index.jsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$log_in$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/log_in/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$sign_up$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/sign_up/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$dashboard$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/dashboard/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exams$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/exams/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$about$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/about/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/copy_exam/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/admin_page/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_users$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/manage_users/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$manage_exams$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/manage_exams/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$form$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/form/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$add_examinee$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/add_examinee/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$exam_result$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/exam_result/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$result_test$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/result_test/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/reviewer/index.jsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/reviewer/index.jsx [app-client] (ecmascript) <export default as Reviewer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reviewer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/reviewer/index.jsx [app-client] (ecmascript)");
}),
"[project]/mock-board-project/src/app/(pages)/reviewer/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/index.jsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Reviewer$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/reviewer/index.jsx [app-client] (ecmascript) <export default as Reviewer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ReviewerPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReviewerPage.useEffect": ()=>{
            async function check() {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])("/services/jwt/verify");
                if (!response.success) return router.push("/");
                setEmail(response.data.message.data[0].email);
            }
            check();
        }
    }["ReviewerPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$reviewer$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Reviewer$3e$__["Reviewer"], {
        email: email
    }, void 0, false, {
        fileName: "[project]/mock-board-project/src/app/(pages)/reviewer/page.jsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_s(ReviewerPage, "AmCUxgM2HlyZ6n3rFr8nBidGR9I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ReviewerPage;
var _c;
__turbopack_context__.k.register(_c, "ReviewerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mock-board-project_src_app_8518d43f._.js.map