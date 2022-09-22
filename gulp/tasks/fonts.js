import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
//import path from 'path';

export const otfToTtf = () => {
    // пошук файлів otF
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            }))
        )
        //конвертування в ttf
        .pipe(fonter({
            formats: ['ttf']
        }))
        //завантаження в вихідну папку
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}
export const ttfToWoff = () => {
    //пошук файлів шрифтів ttf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            }))
        )
        //конвертація в woff
        .pipe(fonter({
            formats: ['woff']
        }))
        //завантаження в папку з результатом 
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
        //пошук фпйи шрифтів ttf
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        //конвертація в woff2
        .pipe(ttf2woff2())
        //завантаження в папку з результатом 
        .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}
export const fontsStyle = () => {
    //файл стилів підключення шрифтів
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
    //первірка на існування файлів шрифтів
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            //первірка на існування файлів стилів для підключення шрифтів 
            if (!fs.existsSync(fontsFile)) {
                //якщо файла нема, створюємо його
                fs.writeFile(fontsFile, '', cb);
                let newFileOnly;
                for (var i = 0; i < fontsFiles.length; i++) {
                    //записуємо підключення шрифтів у файл стилів
                    let fontFileName = fontsFiles[i].split('.')[0];
                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                        let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                        if (fontWeight.toLowerCase() === 'thin') {
                            fontWeight = 100;
                        } else if (fontWeight.toLowerCase() === 'extralight') {
                            fontWeight = 200;
                        } else if (fontWeight.toLowerCase() === 'light') {
                            fontWeight = 300;
                        } else if (fontWeight.toLowerCase() === 'medium') {
                            fontWeight = 500;
                        } else if (fontWeight.toLowerCase() === 'semibold') {
                            fontWeight = 600;
                        } else if (fontWeight.toLowerCase() === 'bold') {
                            fontWeight = 700;
                        } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
                            fontWeight = 800;
                        } else if (fontWeight.toLowerCase() === 'black') {
                            fontWeight = 900;
                        } else {
                            fontWeight = 400;
                        }
                        fs.appendFile(fontsFile,
                            `@font-face{
                                font-family:${fontName};
                                font-diasplay:swap;
                                src:url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");
                                font-weight:${fontWeight};
                                font-style:normal;
                            }\r\n`, cb);
                        newFileOnly = fontFileName;

                    }

                }
            } else {
                //якщо файл існує виводимо повідомлення
                console.log("file scss/fonts.scss already exists. dlya onovlennya yogo treba vydalyty");
            }
        }
    });
    return app.gulp.src(`${app.path.srcFolder}`);
    function cb() { }

}