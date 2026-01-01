// Definire funcții

// Actualizare stare Meniu
            function updateMeniu() {
                const aside = document.querySelector('aside');
                const toggleBtn = document.getElementById('menu-toggle');
                const width = window.innerWidth;
                if (width >= 1367) {
                    aside.classList.add('show');
                    toggleBtn.style.display = 'none';
                } else {
                    aside.classList.remove('show');
                    toggleBtn.style.display = 'block';
                }
                updateButton();
            }

// Setare iconiță și vizibilitate buton Meniu
            function updateButton() {
                const aside = document.querySelector('aside');
                const toggleBtn = document.getElementById('menu-toggle');
                if (aside.classList.contains('show')) {
                    toggleBtn.innerHTML = '⨯';
                    toggleBtn.setAttribute('aria-label', 'Închide meniu');
                    toggleBtn.setAttribute('aria-expanded', 'true');
                } else {
                    toggleBtn.innerHTML = '≡';
                    toggleBtn.setAttribute('aria-label', 'Meniu');
                    toggleBtn.setAttribute('aria-expanded', 'false');
                }
            }

// Aranjare text în container
            const parametri = [];

            function initializeParams() {
                const ids = ['mec', 'isjneamt', 'cjraeneamt', 'ccdneamt'];
                ids.forEach(id => {
                    const el = document.getElementById(id);
                    if (el) {
                        const text = el.innerText || el.textContent;
                        parametri.push({ id, text });
                    }
                });
            }

            const measureSpan = document.createElement('span');
            measureSpan.style.visibility = 'hidden';
            measureSpan.style.position = 'absolute';
            measureSpan.style.whiteSpace = 'pre';
            measureSpan.style.font = 'inherit';
            document.body.appendChild(measureSpan);

            function masoaraString(text) {
                measureSpan.innerText = text;
                const rect = measureSpan.getBoundingClientRect();
                return rect.width;
            }

            function potrivesteText(id, text) {
                const container = document.getElementById(id);
                if (!container) return;
                const aElement = container.closest('a');
                if (!aElement) return;

                container.innerHTML = '';

                const aRect = aElement.getBoundingClientRect();

                const paddingPx = (0.2 + 0.1 + 5 + 0.1 + 0.5 + 0.1 + 0.1 + 0.5) * 16;
                const totalAvailableWidth = aRect.width - paddingPx;

                const cuvinte = text.split(' ');
                let randuri = [];
                let currentLine = [];

                for (const cuvant of cuvinte) {
                    const tempLineText = currentLine.concat(cuvant).join(' ');
                    const width = masoaraString(tempLineText);
                    if (width <= totalAvailableWidth) {
                        currentLine.push(cuvant);
                    } else {
                        if (currentLine.length > 0) {
                            randuri.push(currentLine.join(' '));
                        }
                        const cuvantWidth = masoaraString(cuvant);
                        if (cuvantWidth > totalAvailableWidth) {
                            randuri.push(cuvant);
                            currentLine = [];
                        } else {
                            currentLine = [cuvant];
                            }
                        }
                }
                if (currentLine.length > 0) {
                    randuri.push(currentLine.join(' '));
                }

                let lungimeMaxima = 0;
                const randuriDimensiuni = randuri.map(r => {
                    const w = masoaraString(r);
                    if (w > lungimeMaxima) lungimeMaxima = w;
                    return w;
                });

                randuri.forEach((r, idx) => {
                    const div = document.createElement('div');
                    div.innerText = r;
                    div.style.display = 'block';
                    div.style.marginLeft = ((lungimeMaxima - randuriDimensiuni[idx]) / 2) + 'px';
                    container.appendChild(div);
                });
            }

            function potrivesteTexte() {
                parametri.forEach(({ id, text }) => {
                    const el = document.getElementById(id);
                    if (!el) return;
                    potrivesteText(id, text);
                });
            }

// Setare înălțime imagine în funcție de container de referință
            function updateImagine(referenceDivId, targetDivId) {
                const divRef = document.getElementById(referenceDivId);
                const divTar = document.getElementById(targetDivId);

                if (!divRef || !divTar) return;

                const img = divTar.querySelector('img');

                if (img) {
                    img.style.display = 'none';
                }

                divTar.style.height = 'auto';
                const inaltimeRef = divRef.offsetHeight;
                divTar.style.height = inaltimeRef + 'px';

                if (img) {
                    img.style.height = inaltimeRef + 'px';
                    img.style.display = 'block';
                }
            }

            const imaginiParametri = [
                ['program-secretariat', 'imagine-lucru'],
                ['contact-date', 'imagine-contact'],
                ['personal-text', 'imagine-personal'],
                ['sindicat-contact', 'imagine-sindicat'],
                ['ca-text', 'imagine-ca'],
                ['conducere-text', 'imagine-conducere'],
                ['ceac-descriere', 'imagine-ceac'],
                ['comisii-descriere', 'imagine-comisii'],
                ['regulamente-descriere', 'imagine-regulamente'],
                ['oferta-text', 'imagine-oferta'],
                ['gradinita-text', 'imagine-gradinita'],
                ['pregatitoare-text', 'imagine-pregatitoare'],
                ['evaluari246-text', 'imagine-evaluari246'],
                ['simulare8-text', 'imagine-simulare8'],
                ['evaluare-text', 'imagine-evaluare'],
                ['admitere-text', 'imagine-admitere'],
                ['profesional-text', 'imagine-profesional'],
                ['dual-text', 'imagine-dual'],
                ['altfel-descriere', 'imagine-glob'],
                ['altfel-program', 'imagine-maini'],
                ['altfel-rezultate', 'imagine-cerc'],
                ['certificat', 'imagine-steagul-verde'],
                ['imagine-teme', 'imagine-program'],
                ['imagine-sigla-fee', 'imagine-sigla-ecoscoala'],
                ['imagine-sigla-fee', 'imagine-sigla-ccdg'],
                ['imagine-sigla-fee', 'imagine-ccdg'],
                ['imagine-sigla-fee', 'imagine-sigla-ecosisteme'],
                ['imagine-sigla-fee', 'imagine-sigla-reporteri'],
                ['imagine-sigla-fee', 'imagine-sigla-cheia-verde'],
                ['imagine-sigla-fee', 'imagine-sigla-steagul-albastru'],
                ['imagine-sigla-fee', 'imagine-sigla-fee-global'],
                ['clasa-viitorului-videoconferinta', 'videoconferinta-clasa-viitorului'],
                ['clasa-viitorului-videoconferinta', 'altfel-clasa-viitorului'],
                ['clasa-viitorului-videoconferinta', 'classroom-clasa-viitorului'],
                ['clasa-viitorului-videoconferinta', 'meet-clasa-viitorului'],
                ['clasa-viitorului-videoconferinta', 'word-clasa-viitorului'],
                ['clasa-viitorului-videoconferinta', 'powerpoint-clasa-viitorului'],
                ['clasa-viitorului-videoconferinta', 'powerpoint-clasa-viitorului'],
                ['in-siguranta', 'la-joaca']
            ];

            function updateImagini() {
                const tryUpdate = () => {

                    imaginiParametri.forEach(([referenceDivId, targetDivId]) => {
                        const divRef = document.getElementById(referenceDivId);
                        const divTar = document.getElementById(targetDivId);
                    });

                    imaginiParametri.forEach(([referenceDivId, targetDivId]) => {
                        updateImagine(referenceDivId, targetDivId);
                    });
                  };

                tryUpdate();
            }

// Setare înălțime container în funcție de container de referință
            function updateDiv(referenceDivId, targetDivId, imageDivId, nrSiblings) {
                const divRef = document.getElementById(referenceDivId);
                const divTar = document.getElementById(targetDivId);
                const divImg = document.getElementById(imageDivId);

                if (!divRef || !divTar || !divImg) return;

                const imagine = divImg.querySelector('img');
                if (!imagine) return;

                imagine.style.display = 'none';

                const ajusteazaImg = () => {
                    const inaltimeRef = divRef.offsetHeight;

                    let inaltimeCopii = 0;
                    Array.from(divTar.children).forEach(elem => {
                        if (elem.id !== imageDivId) {
                        inaltimeCopii += elem.offsetHeight;
                        }
                    });

                    const inaltimeImg = inaltimeRef - inaltimeCopii - ( 2 * nrSiblings) - 1;
                    imagine.style.height = inaltimeImg > 0 ? inaltimeImg + 'px' : '0px';
                    imagine.style.display = 'block';
                };
                ajusteazaImg();
            }

            const divsParametri = [
                ['verde-motivatie', 'verde-logo', 'imagine-logo', '1'],
                ['imagine-sos', 'verde-voluntari', 'imagine-voluntari', '2']
            ];

            function updateDivs() {
                divsParametri.forEach(([referenceDivId, targetDivId, imageDivId, nrSiblings]) => {
                    const referenceDiv = document.getElementById(referenceDivId);
                    const targetDiv = document.getElementById(targetDivId);
                    const imageDiv = document.getElementById(imageDivId);

                    if (!referenceDiv || !targetDiv || !imageDiv) {
                        return;
                    }
                    divsParametri.forEach(([referenceDivId, targetDivId, imageDivId, nrSiblings]) => {
                        updateDiv(referenceDivId, targetDivId, imageDivId, nrSiblings);
                    });
                });
            }

// Poziționare text alternativ dacă imaginea nu s-a încărcat
            function updateAlt() {
                const images = document.querySelectorAll('img');
                images.forEach(img => {
                    if (!img.complete || img.naturalWidth === 0) {
                        img.style.padding = '0.5rem';
                    } else {
                        img.style.padding = '';
                    }
                });
            }

// Afișare și poziționare fereastră de informații
            document.querySelectorAll('.tooltip-informatii').forEach(tooltip => {
                const link = tooltip.closest('.tooltip-link');
                if (!link) return;

                function showTooltipAtMouse(e) {
                    if (link === document.activeElement) {
                        return;
                    }

                    tooltip.style.position = 'fixed';
                    const offsetX = 10;
                    const offsetY = 10;
                    tooltip.style.top = (e.clientY + offsetY) + 'px';
                    tooltip.style.left = (e.clientX + offsetX) + 'px';
                    tooltip.style.bottom = 'auto';
                    tooltip.style.right = 'auto';
                    tooltip.style.visibility = 'visible';
                    tooltip.style.opacity = '1';
                    tooltip.style.pointerEvents = 'auto';
                }

                function showTooltipAtFocus() {
                    tooltip.style.position = 'absolute';
                    tooltip.style.top = null;
                    tooltip.style.left = null;
                    tooltip.style.bottom = '0';
                    tooltip.style.right = '0';
                    tooltip.style.visibility = 'visible';
                    tooltip.style.opacity = '1';
                    tooltip.style.pointerEvents = 'auto';
                }

                function hideTooltip() {
                    tooltip.style.visibility = 'hidden';
                    tooltip.style.opacity = '0';
                    tooltip.style.pointerEvents = 'none';
                    tooltip.style.position = 'absolute';
                    tooltip.style.top = null;
                    tooltip.style.left = null;
                    tooltip.style.bottom = '0';
                    tooltip.style.right = '0';
                }

                link.addEventListener('mousemove', (e) => {
                    showTooltipAtMouse(e);
                });

                link.addEventListener('mouseenter', (e) => {
                    if (link !== document.activeElement) {
                        showTooltipAtMouse(e);
                    }
                });

                link.addEventListener('mouseleave', () => {
                    if (link !== document.activeElement) {
                        hideTooltip();
                    }
                });

                link.addEventListener('focus', () => {
                    showTooltipAtFocus();
                });

                link.addEventListener('blur', () => {
                    hideTooltip();
                });
            });

// Setare lățime fereastră de informații
            function ajusteazaTooltip(tooltip) {
                if (!tooltip) return;

                const computedStyleBeforeHide = getComputedStyle(tooltip);
                const paddingLeft = parseFloat(computedStyleBeforeHide.paddingLeft) || 0;
                const paddingRight = parseFloat(computedStyleBeforeHide.paddingRight) || 0;
                const paddingPx = paddingLeft + paddingRight;

                tooltip.style.display = 'none';
                tooltip.style.width = 'auto';

                const computedStyle = getComputedStyle(tooltip);
                const fontFamily = computedStyle.fontFamily;
                const fontSize = computedStyle.fontSize;
                const fontWeight = computedStyle.fontWeight;
                const fontStyle = computedStyle.fontStyle;
                const lineHeight = computedStyle.lineHeight;

                const containerRect = tooltip.parentElement.getBoundingClientRect();

                const span = document.createElement('span');
                span.style.visibility = 'hidden';
                span.style.position = 'absolute';
                span.style.whiteSpace = 'pre';
                span.style.boxSizing = 'border-box';
                span.style.fontFamily = fontFamily;
                span.style.fontSize = fontSize;
                span.style.fontWeight = fontWeight;
                span.style.fontStyle = fontStyle;
                span.style.lineHeight = lineHeight;

                span.style.paddingLeft = '0.1rem';
                span.style.paddingRight = '0.1rem';

                document.body.appendChild(span);

                const maxLineWidth = containerRect.width - paddingPx;

                const text = tooltip.innerText || tooltip.textContent;
                const cuvinte = text.split(' ');

                let randuri = [];
                let currentLine = [];

                for (const cuvant of cuvinte) {
                    const tempLineText = currentLine.concat(cuvant).join(' ');
                    span.innerText = tempLineText;
                    const width = span.offsetWidth;
                    if (width <= maxLineWidth) {
                        currentLine.push(cuvant);
                    } else {
                        if (currentLine.length > 0) {
                            randuri.push(currentLine.join(' '));
                        }
                        span.innerText = cuvant;
                        const cuvantWidth = span.offsetWidth;
                        if (cuvantWidth > maxLineWidth) {
                            randuri.push(cuvant);
                            currentLine = [];
                        } else {
                            currentLine = [cuvant];
                        }
                    }
                }
                if (currentLine.length > 0) {
                    randuri.push(currentLine.join(' '));
                }

                let lungimeMaxima = 0;
                for (const r of randuri) {
                    span.innerText = r;
                    const w = span.offsetWidth;
                    if (w > lungimeMaxima) lungimeMaxima = w;
                }

                document.body.removeChild(span);

                const totalWidth = lungimeMaxima + paddingPx;
                tooltip.style.width = totalWidth + 'px';

                tooltip.style.paddingLeft = '0.1rem';
                tooltip.style.paddingRight = '0.1rem';
                tooltip.style.paddingTop = '0.15rem';
                tooltip.style.paddingBottom = '0.15rem';

                tooltip.style.display = 'block';
            }

            const tooltips = ['tooltip-title', 'tooltip-content'];

            tooltips.forEach(className => {
                document.querySelectorAll(`.${className}`).forEach(tooltip => {
                    tooltip.style.display = 'none';

                    const parent = tooltip.parentElement;
                    let isFocused = false;
                    let isHovered = false;

                    function updateTooltipVisibility() {
                        if (isFocused || isHovered) {
                            ajusteazaTooltip(tooltip);
                        } else {
                            tooltip.style.display = 'none';
                        }
                    }

                    parent.addEventListener('mouseenter', () => {
                        isHovered = true;
                        updateTooltipVisibility();
                    });

                    parent.addEventListener('mouseleave', () => {
                        isHovered = false;
                        updateTooltipVisibility();
                    });

                    parent.addEventListener('focus', () => {
                        isFocused = true;
                        updateTooltipVisibility();
                    });

                    parent.addEventListener('blur', () => {
                        isFocused = false;
                        updateTooltipVisibility();
                    });
                });
            });

// Navigare imagini carusel

            function pozitioneazaSageti(caruselContainer) {
                const imagineActive = caruselContainer.querySelector('.carusel li.active img');
                const prevBtn = caruselContainer.querySelector('.arrow-left');
                const nextBtn = caruselContainer.querySelector('.arrow-right');

                if (imagineActive && prevBtn && nextBtn) {
                    const rect = imagineActive.getBoundingClientRect();
                    const containerRect = caruselContainer.getBoundingClientRect();

                    const imagineY = rect.top - containerRect.top;
                    const imagineHeight = rect.height;
                    const topPosition = imagineY + imagineHeight / 2;

                    prevBtn.style.top = topPosition + 'px';
                    nextBtn.style.top = topPosition + 'px';
                }
            }

            function updateSageti() {
                document.querySelectorAll('.content-carusel').forEach(carusel => {
                    pozitioneazaSageti(carusel);
                });
            }

            function initializeCarusel(caruselID) {
                const container = document.getElementById(caruselID);
                const slides = container.querySelectorAll('.carusel li');
                const dots = container.querySelectorAll('.dots .dot');
                const prevBtn = container.querySelector('.arrow-left');
                const nextBtn = container.querySelector('.arrow-right');

                let currentIndex = 0;
                const totalSlides = slides.length;

                let isHovered = false;
                let isActive = false;

                function showSlide(index) {
                    slides.forEach((slide, i) => {
                        slide.classList.toggle('active', i === index);
                    });
                    dots.forEach((dot, i) => {
                        dot.classList.toggle('active', i === index);
                    });
                    setTimeout(() => {
                        pozitioneazaSageti(container);
                    }, 50);
                }

                function updateArrows() {
                    if (isActive || isHovered) {
                        prevBtn.classList.remove('arrow-inactive');
                        nextBtn.classList.remove('arrow-inactive');
                        prevBtn.classList.add('arrow-active');
                        nextBtn.classList.add('arrow-active');
                    } else {
                        prevBtn.classList.remove('arrow-active');
                        nextBtn.classList.remove('arrow-active');
                        prevBtn.classList.add('arrow-inactive');
                        nextBtn.classList.add('arrow-inactive');
                        }
                }

                nextBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % totalSlides;
                    showSlide(currentIndex);
                });
                prevBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                    showSlide(currentIndex);
                });

                container.addEventListener('mouseenter', () => {
                    isHovered = true;
                    if (!isActive) {
                        isHovered = true;
                        updateArrows();
                    }
                });
                container.addEventListener('mouseleave', () => {
                    isHovered = false;
                    if (!document.querySelector(`#${caruselID} .carusel li:focus`)) {
                        isHovered = false;
                        updateArrows();
                    }
                });

                slides.forEach(li => {
                    const img = li.querySelector('img');

                    if (img) {
                        img.addEventListener('focus', () => {
                            isActive = true;
                            updateArrows();
                        });
                        img.addEventListener('blur', () => {
                            setTimeout(() => {
                                if (!document.activeElement.closest(`#${caruselID}`)) {
                                    isActive = false;
                                    updateArrows();
                                }
                            }, 100);
                        });
                    }

                    li.addEventListener('focus', () => {
                        isActive = true;
                        updateArrows();
                    });
                    li.addEventListener('blur', () => {
                        setTimeout(() => {
                            if (!document.activeElement.closest(`#${caruselID}`)) {
                                isActive = false;
                                updateArrows();
                            }
                        }, 100);
                    });
                });

                prevBtn.addEventListener('focus', () => {
                    isActive = true;
                    updateArrows();
                });
                nextBtn.addEventListener('focus', () => {
                    isActive = true;
                    updateArrows();
                });

                document.addEventListener('click', (e) => {
                    const container = document.getElementById(caruselID);
                    if (!e.target.closest(`#${caruselID}`)) {
                        isActive = false;
                        updateArrows();
                    } else {
                        isActive = true;
                        updateArrows();
                        }
                });

                document.addEventListener('keydown', (e) => {
                    const focusedLi = document.querySelector(`#${caruselID} .carusel li:focus`);
                    if ((!focusedLi || !focusedLi.closest(`#${caruselID}`))) return;

                    if (isActive || (focusedLi && focusedLi.closest(`#${caruselID}`))) {
                        isActive = true;
                        updateArrows();
                    }

                    if (e.key === 'ArrowLeft') {
                        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                        showSlide(currentIndex);
                    } else if (e.key === 'ArrowRight') {
                        currentIndex = (currentIndex + 1) % totalSlides;
                        showSlide(currentIndex);
                    }
                });

                document.addEventListener('keydown', (e) => {
                    const container = document.getElementById(caruselID);
                    const focusInCarousel = container.contains(document.activeElement);
                    if (!focusInCarousel) return;

                    if (e.key === 'ArrowLeft') {
                        e.preventDefault();
                        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                        showSlide(currentIndex);
                        prevBtn.focus();
                    } else if (e.key === 'ArrowRight') {
                        e.preventDefault();
                        currentIndex = (currentIndex + 1) % totalSlides;
                        showSlide(currentIndex);
                        nextBtn.focus();
                    }
                });

                container.addEventListener('focusout', () => {
                    if (!container.contains(document.activeElement)) {
                        isActive = false;
                        updateArrows();
                    }
                });

                updateArrows();

                window.addEventListener('load', () => {
                    setTimeout(() => {
                        pozitioneazaSageti(container);
                    }, 100);
                });
            }

            function initializeCarusele() {
                const containers = document.querySelectorAll('.content-carusel');
                containers.forEach((container) => {
                    const id = container.id;
                    initializeCarusel(id);
                });
            }

// Micșorare, mărire și translatare imagine
            function limitPosition(container, img, scale, translateX, translateY) {
                const containerWidth = container.clientWidth;
                const containerHeight = container.clientHeight;
                const imgWidth = img.offsetWidth * scale;
                const imgHeight = img.offsetHeight * scale;

                let newTranslateX = translateX;
                let newTranslateY = translateY;

                if (imgWidth <= containerWidth) {
                    newTranslateX = (containerWidth - imgWidth) / 2;
                } else {
                    const minX = containerWidth - imgWidth;
                    if (newTranslateX > 0) newTranslateX = 0;
                    if (newTranslateX < minX) newTranslateX = minX;
                }

                if (imgHeight <= containerHeight) {
                    newTranslateY = (containerHeight - imgHeight) / 2;
                } else {
                    const minY = containerHeight - imgHeight;
                    if (newTranslateY > 0) newTranslateY = 0;
                    if (newTranslateY < minY) newTranslateY = minY;
                }

                return { translateX: newTranslateX, translateY: newTranslateY };
            }

            function setupZoomTranslatare() {
                let scale = 1;
                let translateX = 0;
                let translateY = 0;
                const minScale = 1;
                const maxScale = 4;

                const container = document.querySelector('.zoom');
                const img = container ? container.querySelector('img') : null;
                if (!container || !img) return;

                let wheelTimeout = null;
                let isDragging = false;
                let startX = 0;
                let startY = 0;

                img.style.cursor = 'grab';

                function updateTransform() {
                    img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
                }

                container.addEventListener('wheel', (e) => {
                    e.preventDefault();

                    const containerRect = container.getBoundingClientRect();
                    const cursorX = e.clientX - containerRect.left;
                    const cursorY = e.clientY - containerRect.top;

                    const imgX = (cursorX - translateX) / scale;
                    const imgY = (cursorY - translateY) / scale;

                    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
                    let newScale = Math.max(minScale, Math.min(maxScale, scale * zoomFactor));

                    let newTranslateX = cursorX - imgX * newScale;
                    let newTranslateY = cursorY - imgY * newScale;

                    const limitedPos = limitPosition(container, img, newScale, newTranslateX, newTranslateY);

                    scale = newScale;
                    translateX = limitedPos.translateX;
                    translateY = limitedPos.translateY;

                    if (scale === minScale) {
                        container.classList.remove('zoom-in', 'zoom-out');
                    } else {
                        if (e.deltaY < 0) {
                            container.classList.add('zoom-in');
                            container.classList.remove('zoom-out');
                        } else {
                        container.classList.remove('zoom-in');
                        container.classList.add('zoom-out');
                        }
                    }

                    updateTransform();

                    if (scale === minScale) {
                        img.style.cursor = 'grab';
                    } else {
                        img.style.cursor = e.deltaY < 0 ? 'zoom-in' : 'zoom-out';
                    }

                    if (wheelTimeout) clearTimeout(wheelTimeout);
                    wheelTimeout = setTimeout(() => {
                        container.classList.remove('zoom-in', 'zoom-out');
                        img.style.cursor = 'grab';
                    }, 100);
                });

                img.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    isDragging = true;
                    startX = e.clientX;
                    startY = e.clientY;
                    img.style.cursor = 'grabbing';
                    container.classList.add('dragging');
                    container.classList.remove('zoom-in', 'zoom-out');
                });

                document.addEventListener('mouseup', () => {
                    if (isDragging) {
                        isDragging = false;
                        img.style.cursor = 'grab';
                        container.classList.remove('dragging');
                    }
                });

                document.addEventListener('mousemove', (e) => {
                    if (!isDragging) return;
                    const dx = e.clientX - startX;
                    const dy = e.clientY - startY;
                    startX = e.clientX;
                    startY = e.clientY;

                    let newTranslateX = translateX + dx;
                    let newTranslateY = translateY + dy;

                    const limitedPos = limitPosition(container, img, scale, newTranslateX, newTranslateY);

                    translateX = limitedPos.translateX;
                    translateY = limitedPos.translateY;

                    updateTransform();
                });
            }

// Inițializare funcții și gestionare evenimente

            document.addEventListener('DOMContentLoaded', () => {

// Setare an curent în Subsol pagină
                const yearEl = document.getElementById('year');
                if (yearEl) {
                    yearEl.textContent = new Date().getFullYear();
                }

// Inițializare funcții
                updateMeniu();
                initializeParams();
                potrivesteTexte();
                updateImagini();
                initializeCarusele();
                updateSageti();
                setupZoomTranslatare();

// Afișare sau ascundere Meniu principal la click pe buton
                const menuToggleBtn = document.getElementById('menu-toggle');
                if (menuToggleBtn) {
                    menuToggleBtn.addEventListener('click', () => {
                        const aside = document.querySelector('aside');
                        aside.classList.toggle('show');
                        updateButton();
                    });
                }

// Gestionare apăsare tastă CTRL
                let ctrlToggleDone = false;
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Control') {
                        if (window.innerWidth < 1367) {
                            e.preventDefault();
                            if (!ctrlToggleDone) {
                                const aside = document.querySelector('aside');
                                aside.classList.toggle('show');
                                updateButton();
                                ctrlToggleDone = true;
                            }
                        }
                    }
                });

// Gestionare eliberare tastă CTRL
                document.addEventListener('keyup', (e) => {
                    if (e.key === 'Control') {
                        ctrlToggleDone = false;
                    }
                });

// Blocare comportament implicit zoom la apăsarea tastei CTRL împreună cu scroll la maus
                document.addEventListener('wheel', (e) => {
                    if (e.ctrlKey) {
                        e.preventDefault();
                    }
                }, { passive: false });

            });

// Apeluri de inițializare pentru funcții

// Inițializare setări la încărcare pagină
            window.addEventListener('load', () => {
                updateDivs();
                updateAlt();
            });

// Inițializare setări la redimensionare pagină
            window.addEventListener('resize', () => {
                updateMeniu();
                potrivesteTexte();
                updateDivs();
                updateImagini();
                updateAlt();
                updateSageti();
            });
