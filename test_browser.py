import asyncio
import os
import sys
from playwright.async_api import async_playwright

async def get_active_section(page):
    # Returns the id of the currently active page section
    sections = ["page-startup", "page-guided", "page-creator", "page-about"]
    for s_id in sections:
        is_visible = await page.eval_on_selector(
            f"#{s_id}",
            "el => window.getComputedStyle(el).display !== 'none' && el.classList.contains('active')"
        )
        if is_visible:
            return s_id
    return None

async def main():
    sys.stdout.reconfigure(encoding='utf-8')
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        # Capture console messages
        console_logs = []
        page.on("console", lambda msg: console_logs.append(f"[{msg.type}] {msg.text}"))
        page.on("pageerror", lambda err: console_logs.append(f"[ERROR] {err.message}"))
        
        # Load local index.html
        path = os.path.abspath("index.html")
        url = f"file:///{path}"
        print(f"Loading URL: {url}")
        
        await page.goto(url)
        await page.wait_for_timeout(1000)
        
        print("\nConsole logs on load:")
        for log in console_logs:
            print(log)
            
        initial_active = await get_active_section(page)
        print(f"Initial active section: {initial_active}")
        
        # Test 1: Click the Guided Builder Card wrapper
        print("\nClicking Guided Builder Card wrapper (#card-guided-builder)...")
        console_logs.clear()
        try:
            await page.click("#card-guided-builder")
            await page.wait_for_timeout(500)
            active_after_guided = await get_active_section(page)
            print(f"Active section after click: {active_after_guided}")
            for log in console_logs:
                print(log)
        except Exception as e:
            print(f"Guided card click failed: {e}")
            
        # Test 2: Click the Advanced Creator Card wrapper
        print("\nReloading page and clicking Advanced Creator Card wrapper (#card-advanced-creator)...")
        console_logs.clear()
        try:
            await page.goto(url)
            await page.wait_for_timeout(500)
            await page.click("#card-advanced-creator")
            await page.wait_for_timeout(500)
            active_after_advanced = await get_active_section(page)
            print(f"Active section after click: {active_after_advanced}")
            for log in console_logs:
                print(log)
        except Exception as e:
            print(f"Advanced card click failed: {e}")
            
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
