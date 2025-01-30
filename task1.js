function processMessage(message, callback) {
  console.log("Събщение:" + message);
  // callback();
}

function done() {
  console.log("Обработката е завършена!");
}

// Test
processMessage("Здравей, свят!");
