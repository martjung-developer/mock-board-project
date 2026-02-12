(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mock-board-project/src/app/components/copy_exam_2/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "styles-module__rXlLmG__active",
  "backArrow": "styles-module__rXlLmG__backArrow",
  "backButton": "styles-module__rXlLmG__backButton",
  "beginBtn": "styles-module__rXlLmG__beginBtn",
  "cardDesc": "styles-module__rXlLmG__cardDesc",
  "cardTitle": "styles-module__rXlLmG__cardTitle",
  "dashboardContainer": "styles-module__rXlLmG__dashboardContainer",
  "logo": "styles-module__rXlLmG__logo",
  "logoImage": "styles-module__rXlLmG__logoImage",
  "logoImage1": "styles-module__rXlLmG__logoImage1",
  "logoImage2": "styles-module__rXlLmG__logoImage2",
  "mainContent": "styles-module__rXlLmG__mainContent",
  "mainWrapper": "styles-module__rXlLmG__mainWrapper",
  "nav": "styles-module__rXlLmG__nav",
  "navItem": "styles-module__rXlLmG__navItem",
  "pageSubtitle": "styles-module__rXlLmG__pageSubtitle",
  "pageTitle": "styles-module__rXlLmG__pageTitle",
  "sidebar": "styles-module__rXlLmG__sidebar",
  "subjectCard": "styles-module__rXlLmG__subjectCard",
  "subjectGrid": "styles-module__rXlLmG__subjectGrid",
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
"[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PartExam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/copy_exam_2/css/styles.module.css [app-client] (css module)");
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
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].user_data.retrieve_mock_exam_reviewer, {
                        email: email
                    });
                    if (response.success) {
                        console.log(statusParts);
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
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
                        onClick: ()=>router.push('/reviewer'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backArrow,
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            "Back to Exams"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageTitle,
                        children: "Librarian Licensure Examination (LLE) Subjects"
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageSubtitle,
                        children: [
                            "Choose a topic under ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Librarian Licensure Examination (LLE)"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx",
                                lineNumber: 46,
                                columnNumber: 34
                            }, this),
                            " to start reviewing."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subjectGrid,
                        children: subjects.map((item, index)=>{
                            // Check if previous part exists and if it was failed
                            const currentPart = Number(item.parts);
                            const previousPart = currentPart - 1;
                            // Find the status of the previous part
                            const previousPartStatus = statusParts.find((status)=>Number(status.parts) === previousPart);
                            // Disable button if:
                            // 1. Previous part exists and was failed, OR
                            // 2. Previous part exists but hasn't been taken yet (not in statusParts)
                            const isDisabled = previousPart > 0 && (!previousPartStatus || previousPartStatus.status === 'Failed');
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subjectCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: item.exam_title
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx",
                                        lineNumber: 69,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                                        children: [
                                            " Part ",
                                            item.parts,
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx",
                                        lineNumber: 70,
                                        columnNumber: 19
                                    }, this),
                                    isDisabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#F44336',
                                            fontSize: '0.9rem',
                                            marginTop: '10px'
                                        },
                                        children: [
                                            "Complete Part ",
                                            previousPart,
                                            " first"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx",
                                        lineNumber: 73,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].beginBtn,
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
                                            router.push('/part_exam_review/library-organization');
                                        },
                                        children: isDisabled ? 'Locked' : 'Begin Test'
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx",
                                        lineNumber: 78,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx",
                                lineNumber: 68,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx",
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
"[project]/mock-board-project/src/app/(pages)/part_exam_review/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExamPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/copy_exam_2/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ExamPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExamPage.useEffect": ()=>{
            async function check() {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])("/services/jwt/verify");
                if (!response.success) return router.push("/");
                setEmail(response.data.message.data[0].email);
            }
            check();
        }
    }["ExamPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$copy_exam_2$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        email: email
    }, void 0, false, {
        fileName: "[project]/mock-board-project/src/app/(pages)/part_exam_review/page.jsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_s(ExamPage, "AmCUxgM2HlyZ6n3rFr8nBidGR9I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ExamPage;
var _c;
__turbopack_context__.k.register(_c, "ExamPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mock-board-project_src_app_4daa67b0._.js.map