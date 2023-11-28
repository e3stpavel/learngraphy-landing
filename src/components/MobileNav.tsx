import { Dialog } from '@ark-ui/solid'
import type { Component } from 'solid-js'
import { Portal } from 'solid-js/web'

interface MobileNavProps {
  logo?: HTMLImageElement
}

export const MobileNav: Component<MobileNavProps> = (props) => {
  return (
    <Dialog.Root lazyMount >
      <Dialog.Trigger asChild>
        <div class="-my-2 -mr-2 lg:hidden">
          <button type="button" class="inline-flex items-center justify-center rounded-md bg-warm-gray-950 p-2 text-warm-gray-400 hover:bg-dark-300 hover:text-light-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500" aria-expanded="false">
            <span class="sr-only">Open menu</span>
            <span class="i-tabler-menu wh-6" />
          </button>
        </div>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Positioner>
          <Dialog.Content class="group">
            <div class="absolute inset-0 min-h-full origin-top-right transform p-2 transition lg:hidden">
              <div class="h-full flex flex-col justify-between divide-y-2 divide-warm-gray-700 divide-opacity-20 rounded-lg bg-dark-800 ring-1 ring-dark-50 ring-opacity-60">
                <div class="px-5 pt-5 pb-6">
                  <Dialog.Title asChild>
                    <span class="sr-only">Mobile nav menu</span>
                  </Dialog.Title>

                  <div class="flex items-center justify-between">
                    <div class="-ml-2">
                      { props.logo }
                    </div>

                    <Dialog.CloseTrigger asChild>
                      <div class="-mr-2">
                        <button type="button" class="inline-flex items-center justify-center rounded-md bg-dark-800 p-2 text-warm-gray-200 hover:bg-dark-300 hover:text-light-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                          <span class="sr-only">Close menu</span>
                          <span class="i-tabler-x wh-6" />
                        </button>
                      </div>
                    </Dialog.CloseTrigger>

                  </div>
                  <div class="mt-6">
                    <nav class="grid gap-6">
                      <a href="#" class="-m-3 flex items-center rounded-lg p-3 hover:bg-dark-300">
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-amber-500 text-white">
                          <span class="i-tabler-message-circle-2 wh-6" />
                        </div>
                        <div class="ml-4 text-base tracking-wide font-medium text-light-100">For professionals</div>
                      </a>

                      <a href="https://e3stpavel.github.io/learngraphy-landing/" target="_blank" class="-m-3 flex items-center rounded-lg p-3 hover:bg-dark-300">
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-amber-500 text-white">
                          <span class="i-tabler-brand-github wh-6" />
                        </div>
                        <div class="ml-4 text-base tracking-wide font-medium text-light-100">Contribute</div>
                      </a>

                      <a href="#" class="-m-3 flex items-center rounded-lg p-3 hover:bg-dark-300">
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-amber-500 text-white">
                          <span class="i-tabler-target-arrow wh-6" />
                        </div>
                        <div class="ml-4 text-base tracking-wide font-medium text-light-100">About us</div>
                      </a>
                    </nav>
                  </div>
                </div>
                <div class="py-6 px-5">
                  <div>
                    <a href="#" class="flex w-full items-center justify-center rounded-md border border-light-800 border-opacity-60 bg-light-100 px-4 py-2 text-base tracking-wide leading-relaxed font-semibold text-black hover:bg-light-950">Download now</a>
                    <p class="mt-6 text-center text-sm tracking-wide text-warm-gray-400">
                      Project is not real, yet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
