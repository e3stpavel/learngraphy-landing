import { Dialog } from '@ark-ui/solid'
import type { FlowComponent } from 'solid-js'
import { Portal } from 'solid-js/web'

export const EasterEgg: FlowComponent = (props) => {
  return (
    <Dialog.Root lazyMount unmountOnExit closeOnInteractOutside>
      <Dialog.Trigger asChild>
        <div class="relative rounded-full py-1 px-3 text-sm leading-6 tracking-wide text-true-gray-400 ring-1 ring-light-100/10 hover:ring-white/20">
          Announcing our first pitch of business idea. <a href="#" class="font-semibold text-light-100"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
        </div>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop class="absolute inset-0 bg-dark-900/60" />
        <Dialog.Positioner class="fixed inset-0 flex items-center justify-center">
          <Dialog.Content class="rounded-2xl overflow-hidden will-change-transform">
            <Dialog.Title class="sr-only">QR-code</Dialog.Title>
            { props.children }
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
