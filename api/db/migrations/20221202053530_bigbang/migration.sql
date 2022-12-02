-- CreateTable
CREATE TABLE "Hello" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Hello_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hello_message_key" ON "Hello"("message");
